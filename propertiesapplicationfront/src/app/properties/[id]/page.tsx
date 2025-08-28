'use client';
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GetPropertyByIdAPI } from "@/app/api/propertyService";
import { GetPropertyImageByIdAPI } from "@/app/api/propertyImageService";
import { GetOwnerByIdAPI } from "@/app/api/ownerService";
import { formatPrice } from "@/utils/string-utils";

export default function PropertyDetail() {
  const params = useParams();
  const id = params?.id as string;

  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState<any>(null);
  const [imageBase64, setImageBase64] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const propertyResponse = await GetPropertyByIdAPI(id);
        setProperty(propertyResponse?.data);
        const imageResponse = await GetPropertyImageByIdAPI(id);
        if (imageResponse?.data && imageResponse.data.length > 0) {
          const fileData = imageResponse.data[0].fileData;
          setImageBase64(`data:image/png;base64,${fileData}`);
        }
        if (propertyResponse?.data?.idOwner) {
          const ownerResponse = await GetOwnerByIdAPI(propertyResponse.data.idOwner);
          setOwnerName(ownerResponse?.data?.name ?? "Sin nombre");
        }
      } catch (error) {
        console.error("[PropertyDetail] Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Cargando propiedad...</p>;
  }

  if (!property) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Propiedad no encontrada.</p>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        {property.name}
      </h1>

      {imageBase64 ? (
        <img
          src={imageBase64}
          alt={property.name}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "300px",
            background: "#ddd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          Sin imagen
        </div>
      )}

      <div style={{ marginTop: "20px", lineHeight: "1.8" }}>
        <p><strong>📍 Dirección:</strong> {property.address}</p>
        <p><strong>📅 Año:</strong> {property.year}</p>
        <p><strong>💲 Precio:</strong> {formatPrice(String(property.price))}</p>
        <p><strong>🏷️ Código interno:</strong> {property.codeInternal}</p>
        <p><strong>👤 Dueño:</strong> {ownerName}</p>
      </div>
    </div>
  );
}