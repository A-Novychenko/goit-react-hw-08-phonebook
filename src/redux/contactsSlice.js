import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.splice(
          state.items.findIndex(contact => contact.id === payload.id),
          1
        );
      })
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        (state, { payload }) => {
          state.isLoading = false;
          console.log('payload', payload);
          state.error = payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const hendlePending = state => {
//   state.isLoading = true;
// };
// const hendleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   console.log('payload', payload);
//   state.error = payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: {
//     [fetchContacts.pending]: hendlePending,
//     [addContact.pending]: hendlePending,
//     [deleteContact.pending]: hendlePending,

//     [fetchContacts.rejected]: hendleRejected,
//     [addContact.rejected]: hendleRejected,
//     [deleteContact.rejected]: hendleRejected,

//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = payload;
//     },

//     [addContact.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(payload);
//     },

//     [deleteContact.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items.splice(
//         state.items.findIndex(contact => contact.id === payload.id),
//         1
//       );
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
