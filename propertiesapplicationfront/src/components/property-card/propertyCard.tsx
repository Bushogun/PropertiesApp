import { PropertyResponseModel } from "@/models/PropertyModel";
import React, { useEffect, useState } from "react";
import { formatPrice } from "@/utils/string-utils";
import { GetPropertyImageByIdAPI } from "@/app/api/propertyImageService";
import { GetOwnerByIdAPI } from "@/app/api/ownerService";
import { useRouter } from "next/navigation";
import "./propertyCard.css";

const PropertyCard: React.FC<{ property: PropertyResponseModel }> = ({ property }) => {
  const [imageBase64, setImageBase64] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await GetPropertyImageByIdAPI(property.idProperty);
        if (response?.data && response.data.length > 0) {
          const fileData = response.data[0].fileData;
          const imgSrc = `data:image/png;base64,${fileData}`;
          setImageBase64(imgSrc);
        }
      } catch (error) {
        console.error("Error al cargar imagen:", error);
      }
    };
    const fetchOwner = async () => {
      try {
        const owner = await GetOwnerByIdAPI(property.idOwner);
        setOwnerName(owner?.data?.name ?? "Sin nombre");
      } catch (error) {
        console.error("Error fetching owner:", error);
      }
    };
    fetchImage();
    fetchOwner();
  }, [property.idOwner , property.idProperty]);

    const handleClick = () => {
    router.push(`/properties/${property.idProperty}`);
  };

  return (
    <div className="property-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="property-image">
        {imageBase64 ? (
          <img src={imageBase64} alt={property.name} />
        ) : (
          <div className="placeholder">Sin imagen</div>
        )}
      </div>

      <div className="property-content">
        <div className="property-header">
          <h3>{property.name}</h3>
          <span className="property-year">{property.year}</span>
        </div>

        <p className="property-address">📍 {property.address}</p>
        <p className="property-price">{formatPrice(String(property.price))}</p>

        <div className="property-footer">
          <span className="property-code">Code: {property.codeInternal}</span>
          <span className="property-owner">👤 Owner: {ownerName}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
