import React, { useEffect, useRef, useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Upload, Form } from 'antd';
import type { UploadProps } from 'antd';
import type { FormInstance } from 'antd';

const { Dragger } = Upload;

interface DragNDropLocalProps {
  form: FormInstance;
  fieldName: string;
  clear?: boolean;
}

const DragNDropLocal: React.FC<DragNDropLocalProps> = ({ form, fieldName, clear }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const thumbnailValue = Form.useWatch(fieldName, form); 
  const fileInputRef = useRef<HTMLInputElement>(null);

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setPreviewUrl(base64);
      form.setFieldsValue({ [fieldName]: base64 });
    }
  };

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    beforeUpload: async (file: File) => {
      const base64 = await convertToBase64(file);
      setPreviewUrl(base64);
      form.setFieldsValue({ [fieldName]: base64 }); 
      return false; 
    },
    onRemove: () => {
      setPreviewUrl(null);
      form.setFieldsValue({ [fieldName]: null });
    },
    showUploadList: false,
  };

  useEffect(()=>{
    if (thumbnailValue) {
      setPreviewUrl(thumbnailValue);
    } else {
      setPreviewUrl(null);
    }
  }, [thumbnailValue]);


  useEffect(() => {
    if (thumbnailValue) {
      setPreviewUrl(thumbnailValue);
    } else {
      setPreviewUrl(null);
    }
    if (clear) {
      setPreviewUrl(null);
      form.setFieldsValue({ [fieldName]: null });
    }
  }, [thumbnailValue, clear, fieldName, form]);


  
  return (
    <div style={{ height: '100%' }}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {previewUrl ? (
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={() => fileInputRef.current?.click()}>
          <img
            src={previewUrl}
            alt="preview"
            style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: '300px' }}
          />
        </div>
      ) : (
        <Dragger {...props} style={{ height: '100%' }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined style={{ color: '#eee' }} />
        </p>
        <p style={{color:'#fff'}}>Upload Picture</p>
      </Dragger>
      )}
    </div>
  );
};

export default DragNDropLocal;