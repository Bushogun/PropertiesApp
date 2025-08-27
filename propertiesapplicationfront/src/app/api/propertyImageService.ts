import api from "@/Config/axios";
import { PropertyImagePostModel } from "@/models/PropertyImagesModel";

const GetAllPropertyImagesAPI = async () => {
    try {
        const result = await api.get(`/property-image`);
        return result.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Error fetching property images");
    }
};

const GetPropertyImageByIdAPI = async (id: string) => {
    try {
        const result = await api.get(`/property-image/${id}`);
        return result.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Error fetching property image");
    }
};

const DeletePropertyImageByIdAPI = async (id: string) => {
    try {
        const result = await api.delete(`/property-image/${id}`);
        return result.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Error deleting property image");
    }
};

const CreatePropertyImageAPI = async (imageData: PropertyImagePostModel) => {
    try {
        const result = await api.post(`/property-image`, imageData);
        return result.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Error creating property image");
    }
};

export {
    GetAllPropertyImagesAPI,
    GetPropertyImageByIdAPI,
    DeletePropertyImageByIdAPI,
    CreatePropertyImageAPI
};



