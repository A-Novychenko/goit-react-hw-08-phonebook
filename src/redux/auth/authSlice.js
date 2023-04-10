// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut, refreshUser } from './authOperations';

// const extraActions = [register,logIn,logOut,refreshUser];

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload: { user, token } }) => {
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      }),

  //   .addMatcher(
  //     isAnyOf(...extraActions.map(action => action.fulfilled)),
  //     state => {
  //       state.isLoading = false;
  //       state.error = null;
  //     }
  //   ),
});

export const authReducer = authSlice.reducer;
