'use client';
import { CreatePropertyImageAPI } from '@/app/api/propertyImageService';
import { PropertyImagePostModel } from '@/models/PropertyImagesModel';
import { setOwners } from '@/redux/features/properties-slice';
import { generateInternalCode } from '@/utils/string-utils';
import { CreatePropertyAPI } from '@/app/api/propertyService';
import { PropertyPostModel } from '@/models/PropertyModel';
import { GetAllOwnersAPI } from '@/app/api/ownerService';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from "@/redux/hooks";
import { Form, Select } from "antd";
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import './registerProperty.css';

export default function RegisterProperty() {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const [allOwners, setAllOwners] = useState<any[]>([]);
    const [selectedOwner, setSelectedOwner] = useState<string | null>(null);
    const [idPropertyCreated, setIdPropertyCreated] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');

    const DragNDropLocal = dynamic(() => import('@/components/dragger-files'), {
        ssr: false,
    });

    const [errors, setErrors] = useState({
        owner: '',
        fullName: '',
        address: '',
        price: '',
        year: '',
    });

    const validateForm = () => {
        const newErrors = {
            owner: '',
            fullName: '',
            address: '',
            price: '',
            year: '',
        };

        if (!selectedOwner) newErrors.owner = 'Please select an owner.';
        if (!fullName.trim()) newErrors.fullName = 'Please enter the Full Name.';
        if (!address.trim()) newErrors.address = 'Please enter the address.';
        if (!price.trim() || isNaN(Number(price))) newErrors.price = 'Please enter a valid price.';
        if (!year.trim() || isNaN(Number(year)) || year.length !== 4) newErrors.year = 'Please enter a valid year.';

        setErrors(newErrors);
        return Object.values(newErrors).every(error => error === '');
    };

    const createProperty = async (payload: PropertyPostModel): Promise<string> => {
        try {
            const response = await CreatePropertyAPI(payload);
            if (!response?.data?.idProperty) {
                throw new Error('CreatePropertyAPI: no retornó idProperty');
            }
            return response.data.idProperty;
        } catch (err) {
            console.error('[createProperty] error =>', err);
            throw err;
        }
    };

    const uploadPropertyImage = async (payload: PropertyImagePostModel): Promise<void> => {
        try {
            const response = await CreatePropertyImageAPI(payload);
            if (!response?.data) {
                throw new Error('CreatePropertyImageAPI: respuesta inválida');
            }
        } catch (err) {
            console.error('[uploadPropertyImage] error =>', err);
            throw err;
        }
    };

    const onSubmit = async () => {
        if (isSubmitting) return;
        if (!validateForm()) {
            console.log('[onSubmit] validation failed');
            return;
        }

        setIsSubmitting(true);
        try {
            const thumbnailBase64 = form.getFieldValue('thumbnailUrl');

            const payload: PropertyPostModel = {
                idOwner: selectedOwner as string,
                name: fullName,
                codeInternal: generateInternalCode(),
                address,
                price: Number(price),
                year: Number(year),
            };

            const idPropertyCreated = await createProperty(payload);
            console.log('[onSubmit] propiedad creada. idProperty =', idPropertyCreated);

            if (thumbnailBase64) {
                const base64String = thumbnailBase64.split(',')[1];

                const payloadImage: PropertyImagePostModel = {
                    idProperty: idPropertyCreated,
                    fileData: base64String,
                    enabled: true,
                };

                await uploadPropertyImage(payloadImage);
                console.log('[onSubmit] imagen subida correctamente');
                toast.success('Property and image uploaded successfully!');
            } else {
                console.log('[onSubmit] no se encontró thumbnail en el formulario. Se omite subida de imagen.');
                toast.success('Property created successfully (without image).');
            }

            form.resetFields();
            setSelectedOwner(null);
            setFullName('');
            setAddress('');
            setPrice('');
            setYear('');
        } catch (err) {
            console.error('[onSubmit] error general =>', err);
            toast.error('There was an error creating the property. Check console for details.');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const fetchOwners = async () => {
            try {
                const response = await GetAllOwnersAPI();
                if (response?.data) {
                    dispatch(setOwners(response.data));
                    setAllOwners(response.data);
                }
            } catch (error) {
                console.error("Error fetching owners:", error);
            }
        };
        fetchOwners();
    }, []);

    return (
        <div className="login-box">
            <form>
                <div className="user-box">
                    <Select
                        className="user-box-antd"
                        placeholder="Select Owner"
                        options={allOwners.map((owner: any) => ({
                            label: owner.name,
                            value: owner.id
                        }))}
                        onChange={(value) => setSelectedOwner(value)}
                        value={selectedOwner || undefined}
                    />
                    <label className="errorLabel">{errors.owner}</label>
                </div>

                <div className="user-box">
                    <input
                        value={fullName}
                        placeholder="Name"
                        onChange={e => setFullName(e.target.value)}
                        className="user-box"
                    />
                    <label className="errorLabel">{errors.fullName}</label>
                </div>

                <div className="user-box">
                    <input
                        value={address}
                        placeholder="Address"
                        onChange={e => setAddress(e.target.value)}
                        className="user-box"
                    />
                    <label className="errorLabel">{errors.address}</label>
                </div>

                <div className="user-box">
                    <input
                        value={price}
                        placeholder="Price"
                        onChange={e => setPrice(e.target.value)}
                        className="user-box"
                        type='number'
                    />
                    <label className="errorLabel">{errors.price}</label>
                </div>

                <div className="user-box">
                    <input
                        value={year}
                        placeholder="Year"
                        onChange={e => setYear(e.target.value)}
                        className="user-box"
                        type='number'
                    />
                    <label className="errorLabel">{errors.year}</label>
                </div>

                <DragNDropLocal form={form} fieldName="thumbnailUrl" clear={false} />

                <input
                    onClick={onSubmit}
                    className="inputButton"
                    type="button"
                    value="Submit"
                />
            </form>
        </div>
    );
}
