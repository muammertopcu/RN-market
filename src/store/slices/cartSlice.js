import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const index = state.items.findIndex(i => i.id === item.id);

      if (index === -1) {
        state.items.push({...item, quantity: 1});
      } else {
        state.items[index].quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const item = action.payload;
      const index = state.items.findIndex(i => i.id === item.id);

      if (index !== -1) {
        if (state.items[index].quantity === 1) {
          state.items = state.items.filter(i => i.id !== item.id);
          return;
        }

        state.items[index].quantity -= 1;
      }
    },
  },
});

export const {addItem, decrementItem} = cartSlice.actions;

export default cartSlice.reducer;
