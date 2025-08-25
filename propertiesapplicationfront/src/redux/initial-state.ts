export interface StateProperties {
  owners: string;
  properties: string;
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
