'use client';
import PropertyCard from "@/components/property-card/propertyCard";
import { GetAllPropertiesAPI } from "../api/propertyService";
import { PropertyResponseModel } from "@/models/PropertyModel";
import { setProperties } from '@/redux/features/properties-slice';
import { useAppDispatch } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import './properties.css';

const Properties = () => {
  const dispatch = useAppDispatch();
  const [properties, setPropertiesState] = useState<PropertyResponseModel[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await GetAllPropertiesAPI();
      if (response?.data) {
        setPropertiesState(response.data);
        dispatch(setProperties(response.data));
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="about-container">
      <h2>Property List</h2>
      <div className="grid">
        {properties.map((property) => (
          <PropertyCard key={property.idProperty} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Properties;
