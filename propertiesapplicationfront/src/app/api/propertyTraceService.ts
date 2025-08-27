import api from "@/Config/axios";
import { PropertyTracePostModel } from "@/models/PropertyTraceModel";

const GetPropertyTraceByIdAPI = async (id: string) => {
    try {
        const result = await api.get(`/property-trace/${id}`);
        return result.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Error fetching property trace");
    }
};

const CreatePropertyTraceAPI = async (traceData: PropertyTracePostModel) => {
    try {
        const result = await api.post(`/property-trace`, traceData);
        return result.data;
    } catch (error: any) {
        throw new Error(error.response?.data || "Error creating property trace");
    }
};

export {
    GetPropertyTraceByIdAPI,
    CreatePropertyTraceAPI
};