import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: '',
  page: 1,
  url: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b294078ac9e5deee42e81781ed53a00c&page=1`,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    search(state, action) {},
    sort(state, action) {},
  },
});

const store = configureStore({
  reducer: movieSlice.reducer,
});

export const movieActions = movieSlice.actions;

export default store;
