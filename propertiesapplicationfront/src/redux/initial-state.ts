import { OwnerResponseModel } from "@/models/OwnerModel";
import { PropertyResponseModel } from "@/models/PropertyModel";

export interface StateProperties {
  owners: OwnerResponseModel[] | string;
  properties: PropertyResponseModel[] | string;
  filterQuery: string;
  specificProperties: string;
  loading: boolean;
  error: string | null;
}

export const initialStateProperties: StateProperties = {
  owners: '',
  properties: '',
  filterQuery: '',
  specificProperties: '', 
  loading: false,
  error: null,
};
