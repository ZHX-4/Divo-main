import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    
   
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    
   
    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    
    
    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },

  
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },

    
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});


export const {
  loginRequest,
  registerRequest,
  loginSuccess,
  registerSuccess,
  authFailure,
  logout,
  updateUserProfile,
  login,
  updateUser,
} = authSlice.actions;


export default authSlice.reducer; 
