'use client';
import React, { useState } from "react";
import PropertyCard from "@/components/property-card/propertyCard";
import './properties.css';

const Properties = () => {
  const [properties, setProperties] = useState([
    {
      id: "1",
      fullName: "Casa Familiar",
      address: "Calle 123, Cali, Colombia",
      price: "$200,000",
      year: "2018",
    },
    {
      id: "2",
      fullName: "Apartamento Moderno",
      address: "Cra 45 #12-34, Medellín",
      price: "$150,000",
      year: "2020",
    },
    {
      id: "3",
      fullName: "Finca Campestre",
      address: "Km 12 vía Jamundí",
      price: "$350,000",
      year: "2015",
    },
  ]);

  return (
    <div className="about-container">
      <h2>Lista de Propiedades</h2>
      <div className="grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
