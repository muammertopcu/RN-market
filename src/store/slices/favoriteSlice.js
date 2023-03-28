import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const item = action.payload;
      const isFavorite = state.favorites.find(i => i.id === item.id);

      if (isFavorite) {
        state.favorites = state.favorites.filter(i => i.id !== item.id);
      } else {
        state.favorites.push(item);
      }
    },
  },
});

export const {toggleFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
