import axiosRequest from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetProfile = createAsyncThunk(
  "counter/GetProfile",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosRequest("/cars");
      return data;
    } catch (error) {
      alert("Ошибка загрузки данных ❌");
      return rejectWithValue("Ошибка загрузки профиля");
    }
  },
);
