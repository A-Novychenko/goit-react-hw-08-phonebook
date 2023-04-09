// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

// const extraActions = [register];

const authSlice = createSlice({
  name: 'contacts',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder =>
    builder.addCase(register.fulfilled, (state, { payload }) => {
      console.log('payload', payload);
      state.user = { ...payload.user };
      state.token = null;
      state.isLoggedIn = payload;
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
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = payload;
//       })
//       .addCase(addContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.splice(
//           state.items.findIndex(contact => contact.id === payload.id),
//           1
//         );
//       })
//       .addMatcher(
//         isAnyOf(...extraActions.map(action => action.fulfilled)),
//         state => {
//           state.isLoading = false;
//           state.error = null;
//         }
//       )
//       .addMatcher(
//         isAnyOf(...extraActions.map(action => action.pending)),
//         state => {
//           state.isLoading = true;
//         }
//       )
//       .addMatcher(
//         isAnyOf(...extraActions.map(action => action.rejected)),
//         (state, { payload }) => {
//           state.isLoading = false;
//           state.error = payload;
//         }
//       ),
// });

// export const contactsReducer = contactsSlice.reducer;
