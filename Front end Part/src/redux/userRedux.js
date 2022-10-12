import { createSlice } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      console.log("success");
      state.isFetching = false;
      state.currentUser = action.payload;
      
    },
    loginFailure: (state) => {

    console.log("Failure");
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;