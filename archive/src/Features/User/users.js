import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

import { apiUrl } from "../../Constant";
import { apiCall } from "../../Services/CommonService"; 

const initialState = {
  token: "",
  userData: null,
  adminData: null,
  userDetail: null, 
  isLoginLoading: false, 
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      localStorage.clear();
      return initialState;
    },
    setUser: (state, action) => {
      state.userDetail = action.payload;
    },
    setIsLoginLoading: (state, action) => {
      state.isLoginLoading = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    }, 
  },
});
export const {
  setUser,
  logout,
  setToken,
  setIsLoginLoading,
  setUserData, 
} = userSlice.actions;

export default userSlice.reducer;

export const loginApi = (value, onSuccessCallback) => (dispatch) => {
  dispatch(setIsLoginLoading(true));
  try {
    const onSuccess = (response) => {
      onSuccessCallback(response);
      dispatch(setUser(response.data?.user));
      dispatch(setToken(response.data.token));
      dispatch(setIsLoginLoading(false));
    };
    const onFailure = (error) => {
      toast.error(error.message);
      dispatch(setIsLoginLoading(false));
    };

    apiCall("POST", apiUrl.LOG_IN, value, onSuccess, onFailure);
  } catch (error) {
    toast.error(error);
    dispatch(setIsLoginLoading(false));
  }
}; 