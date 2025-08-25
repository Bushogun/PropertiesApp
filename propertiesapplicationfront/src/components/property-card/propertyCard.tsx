import React from "react";

interface Property {
  id: string;
  fullName: string;
  address: string;
  price: string;
  year: string;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="property-card">
      <h3>{property.fullName}</h3>
      <p><strong>Dirección:</strong> {property.address}</p>
      <p><strong>Precio:</strong> {property.price}</p>
      <p><strong>Año:</strong> {property.year}</p>
    </div>
  );
};

export default PropertyCard;
