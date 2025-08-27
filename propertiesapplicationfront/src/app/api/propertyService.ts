import api from "@/Config/axios";
import { PropertyPostModel } from "@/models/PropertyModel";

const GetAllPropertiesAPI = async () => {
    try {
        const result = await api.get(`/property`);
        return result.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Error fetching properties");
    }
};

const CreatePropertyAPI = async (propertyData: PropertyPostModel) => {
    try {
        const result = await api.post(`/property`, propertyData);
        return result.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Error creating property");
    }
};

const GetPropertyByIdAPI = async (id: string) => {
    try {
        const result = await api.get(`/property/${id}`);
        return result.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Error fetching property by ID");
    }
};

const DeletePropertyByIdAPI = async (id: string) => {
    try {
        const result = await api.delete(`/property/${id}`);
        return result.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Error deleting property");
    }
};

export {
    GetAllPropertiesAPI,
    CreatePropertyAPI,
    GetPropertyByIdAPI,
    DeletePropertyByIdAPI
};