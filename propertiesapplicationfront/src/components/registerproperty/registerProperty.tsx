'use client';
import React, { useState } from 'react';
import { Form, Select } from "antd";
import './registerProperty.css';
import dynamic from 'next/dynamic';

export default function RegisterProperty() {

    const [form] = Form.useForm();

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');
    const DragNDropLocal = dynamic(() => import('@/components/dragger-files'), {
        ssr: false,
    });

    const [errors, setErrors] = useState({
        fullName: '',
        address: '',
        price: '',
        year: '',
    });

    const validateForm = () => {
        const newErrors = {
            fullName: '',
            address: '',
            price: '',
            year: '',
        };

    if (!fullName.trim()) newErrors.fullName = 'Please enter your Full Name.';
    if (!address.trim()) newErrors.address = 'Please enter the address.';
    if (!price.trim() || isNaN(Number(price))) newErrors.price = 'Please enter a valid price.';
    if (!year.trim() || isNaN(Number(year)) || year.length !== 4) newErrors.year = 'Please enter a valid year.';

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
    };

    const onSubmit = () => {
        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    };

    return (
        <div className="login-box">
            <form>
                <div className="user-box">
                    {/* <input
                        value={fullName}
                        placeholder="Full Name"
                        onChange={e => setFullName(e.target.value)}
                        className="user-box"
                    />
                    <label className="errorLabel">{errors.fullName}</label> */}
                    <Select
                        className="user-box-antd" 
                        placeholder="Select Owner"
                        options={[
                            { value: 0, label: 'Básico' },
                            { value: 1, label: 'Intermediário' },
                            { value: 2, label: 'Avançado' }
                        ]}
                    />
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

                <input onClick={onSubmit}
                    className={"inputButton"}
                    type="button"
                    value={"Submit"}
                />
            </form>
        </div>
    );
}
