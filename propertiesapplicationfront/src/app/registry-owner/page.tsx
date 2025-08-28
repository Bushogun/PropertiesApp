'use client';
import React, { useState } from 'react';
import { Form, DatePicker } from "antd";
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';
import './registerOwner.css';
import { CreateOwnerAPI } from '@/app/api/ownerService';
import { OwnerPostModel } from '@/models/OwnerModel';
import { toast } from 'react-toastify';

export default function RegisterOwner() {
  const [form] = Form.useForm();
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState('');
  const [birthday, setBirthday] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const DragNDropLocal = dynamic(() => import('@/components/dragger-files'), {
    ssr: false,
  });

  const [errors, setErrors] = useState({
    fullName: '',
    address: '',
    photo: '',
    birthday: '',
  });

  // VALIDACIÓN: ahora checa también el thumbnail que está en el `form`
  const validateForm = () => {
    const uploadedPhoto = form.getFieldValue('thumbnailUrl');
    const newErrors = {
      fullName: '',
      address: '',
      photo: '',
      birthday: '',
    };

    if (!fullName.trim()) newErrors.fullName = 'Please enter the Full Name.';
    if (!address.trim()) newErrors.address = 'Please enter the Address.';
    // revisamos tanto el state photo como el thumbnail subido en el form
    if (!(photo?.trim() || (uploadedPhoto && uploadedPhoto !== ''))) newErrors.photo = 'Please upload a Photo.';
    if (!birthday.trim()) newErrors.birthday = 'Please select a Birthday.';

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const onSubmit = async () => {
    if (isSubmitting) return;
    if (!validateForm()) {
      console.log('[RegisterOwner] validation failed', { fullName, address, photo, birthday, thumbnail: form.getFieldValue('thumbnailUrl') });
      return;
    }

    setIsSubmitting(true);

    try {
      // obtenemos la foto directamente del form (si existe) o del state
      const uploadedPhoto = form.getFieldValue('thumbnailUrl');
      const finalPhotoRaw = uploadedPhoto || photo || '';

      // Si viene como dataURL (data:image/png;base64,AAA...), extraemos solo base64 (igual que haces en property)
      const finalPhoto = typeof finalPhotoRaw === 'string' && finalPhotoRaw.includes(',')
        ? finalPhotoRaw.split(',')[1]
        : finalPhotoRaw;

      const ownerData: OwnerPostModel = {
        name: fullName,
        address,
        photo: finalPhoto, // mandamos base64 o string según lo que tu backend espere
        birthday: dayjs(birthday).toISOString(), // ISO string
      };

      console.log('[RegisterOwner] sending payload:', ownerData);

      const response = await CreateOwnerAPI(ownerData);
      console.log('[RegisterOwner] API response:', response);
      toast.success('Owner created successfully!');
      // limpiar
      form.resetFields();
      setFullName('');
      setAddress('');
      setPhoto('');
      setBirthday('');
    } catch (error: any) {
      console.error('[RegisterOwner] Error creating owner:', error);
      toast.error('Error creating owner: ' + (error?.message || 'Check console'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-box">
      <form onSubmit={(e) => e.preventDefault()}>
        <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px' }}>
          Here you can easily register owners.
        </p>

        <div className="user-box">
          <input
            value={fullName}
            placeholder="Full Name"
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
          <div className="user-box2">
            <DatePicker
              style={{ paddingTop: '10px' }}
              className="user-box-antd"
              placeholder="Birthday"
              onChange={(date) => setBirthday(date ? dayjs(date).toISOString() : '')}
            />
            <label className="errorLabel">{errors.birthday}</label>
          </div>
        </div>

        {/* Drag & Drop: debe setear el field `thumbnailUrl` en el `form` */}
        <DragNDropLocal form={form} fieldName="thumbnailUrl" clear={false} />
        <label className="errorLabel">{errors.photo}</label>

        <input
          onClick={onSubmit}
          disabled={isSubmitting}
          className={"inputButton"}
          type="button"
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>
    </div>
  );
}
