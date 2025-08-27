'use client';
import React, { useEffect, useState } from "react";
import PropertyCard from "@/components/property-card/propertyCard";
import { GetAllPropertiesAPI } from "../api/propertyService";
import './properties.css';

const Properties = () => {
  const [properties, setProperties] = useState({} as any);

useEffect(() => {
  const fetchProperties = async () => {
    const response = await GetAllPropertiesAPI();
    console.log('API Response:', response); 
  };
  fetchProperties();
}, []);

  return (
    <div className="about-container">
      <h2>Lista de Propiedades</h2>
      <div className="grid">
        {/* {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))} */}
      </div>
      <h3>Respuesta completa del API:</h3>
      <pre>
        {JSON.stringify(properties, null, 2)}
      </pre>
    </div>
  );
}

export default Properties;
