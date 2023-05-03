import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContactItem, deleteContactItem } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    // [fetchContacts.fulfilled]: (state, action) => {
    //   return {
    //     ...state,
    //     items: [...state.items, ...action.payload],
    //   };
    // },
    // [fetchContacts.pending]: state => {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // },
    // [fetchContacts.rejected]: (state, action) => {
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    // },

    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContactItem.pending]: handlePending,
    [addContactItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addContactItem.rejected]: handleRejected,
    [deleteContactItem.pending]: handlePending,
    [deleteContactItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContactItem.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
