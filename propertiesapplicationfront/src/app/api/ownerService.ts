import api from "@/Config/axios";
import { OwnerPostModel } from "@/models/OwnerModel";

const GetAllOwnersAPI = async () => {
    try {
        const result = await api.get(`/owners`);
        const response = await result.data;
        return response;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

const CreateOwnerAPI = async (ownerData: OwnerPostModel) => {
  try {
    const result = await api.post(`/owners`, ownerData);
    return result.data;
  } catch (error: any) {
    throw new Error(error.response?.data || "Error creating owner");
  }
};

const GetOwnerByIdAPI = async (id: string) => {
  try {
    const result = await api.get(`/owners/${id}`);
    return result.data;
  } catch (error: any) {
    throw new Error(error.response?.data || "Error fetching owner by ID");
  }
};

const DeleteOwnerAPI = async (id: string) => {
  try {
    const result = await api.delete(`/owners/${id}`);
    return result.data;
  } catch (error: any) {
    throw new Error(error.response?.data || "Error deleting owner");
  }
};

export { 
    GetAllOwnersAPI,
    CreateOwnerAPI,
    GetOwnerByIdAPI,
    DeleteOwnerAPI
 };