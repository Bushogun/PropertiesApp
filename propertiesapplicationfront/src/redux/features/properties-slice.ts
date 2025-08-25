import { createSlice } from "@reduxjs/toolkit";
import { initialStateProperties } from "@/redux/initial-state";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: initialStateProperties,
  reducers: {
    setOwners: (state, action) => {
      state.owners = action.payload;
    },
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
    setSpecificProperty: (state, action) => {
      state.specificProperties = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setOwners,
  setProperties,
  setFilterQuery,
  setSpecificProperty,
  setLoading,
  setError,
} = propertiesSlice.actions;

export default propertiesSlice.reducer