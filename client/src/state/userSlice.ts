import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserState {
  address: string;
}

const initialState: UserState = {
  address: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { setAddress } = userSlice.actions;

export const selectAddress = (state: RootState): string => state.user.address;

export default userSlice.reducer;
