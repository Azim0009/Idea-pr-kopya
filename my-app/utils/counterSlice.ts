import { GetProfile } from "@/src/api/api";
import { createSlice } from "@reduxjs/toolkit";

interface CarsState {
  cars: any[];
  loading: boolean;
}

const initialState: CarsState = {
  cars: [],
  loading: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(GetProfile.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default carsSlice.reducer;
