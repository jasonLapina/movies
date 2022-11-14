import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b294078ac9e5deee42e81781ed53a00c&page=1`,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    randomize(state) {},
    sort(state, action) {},
    changePage(state, action) {},
    search(state, action) {
      state.url = `https://api.themoviedb.org/3/search/movie?&api_key=b294078ac9e5deee42e81781ed53a00c&query=${action.payload}`;
    },
  },
});

const store = configureStore({
  reducer: movieSlice.reducer,
});

export const movieActions = movieSlice.actions;

export default store;
