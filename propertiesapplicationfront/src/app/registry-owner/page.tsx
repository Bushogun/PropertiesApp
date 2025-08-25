'use client';
import React, { useState } from 'react';
import { Form, DatePicker } from "antd";
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';
import './registerOwner.css';

export default function RegisterOwner() {

  const [form] = Form.useForm();

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState(''); 
  const [birthday, setBirthday] = useState('');

  const DragNDropLocal = dynamic(() => import('@/components/dragger-files'), {
    ssr: false,
  });

  const [errors, setErrors] = useState({
    fullName: '',
    address: '',
    photo: '',
    birthday: '',
  });

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      address: '',
      photo: '',
      birthday: '',
    };

    if (!fullName.trim()) newErrors.fullName = 'Please enter the Full Name.';
    if (!address.trim()) newErrors.address = 'Please enter the Address.';
    if (!photo.trim()) newErrors.photo = 'Please upload a Photo.';
    if (!birthday.trim()) newErrors.birthday = 'Please select a Birthday.';

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const onSubmit = () => {
    if (validateForm()) {
      // aquí dispararías el _mediator API call_ a tu backend con los datos
      alert(JSON.stringify({ fullName, address, photo, birthday }, null, 2));
    }
  };

  return (
    <div className="login-box">
      <form>
        <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px'}}>Here you can easily register owners.</p>
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
          style={{paddingTop: '10px'}}
            className="user-box-antd"
            placeholder="Birthday"
          />
          <label className="errorLabel">{errors.birthday}</label>
          </div>
        </div>

        <DragNDropLocal
          form={form}
          fieldName="photo"
          clear={false}
        />
        <label className="errorLabel">{errors.photo}</label>

        <input
          onClick={onSubmit}
          className={"inputButton"}
          type="button"
          value={"Submit"}
        />
      </form>
    </div>
  );
}
