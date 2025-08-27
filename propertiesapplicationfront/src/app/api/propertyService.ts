import api from "@/Config/axios";

const GetAllPropertiesAPI = async () => {
    try {
        const result = await api.get(`/property`);
        const response = await result.data;
        return response;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export { GetAllPropertiesAPI };
