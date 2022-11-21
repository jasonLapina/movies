import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: '/discover/movie?sort_by=popularity.desc',
  page: 1,
  pages: 0,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getInitMovies(state) {
      state.url = '/discover/movie?sort_by=popularity.desc';
      state.page = 1;
    },
    randomize(state) {
      state.url = '/discover/movie?sort_by=popularity.desc';
      state.page = Math.floor(Math.random() * 100) + 1;
    },
    filterGenre(state, action) {
      state.url = `/discover/movie?with_genres=${action.payload}`;
      state.page = 1;
    },
    changePage(state, action) {
      state.page = action.payload;
      console.log(state.url);
    },
    search(state, action) {
      state.url = `/search/movie?&query=${action.payload}`;
      state.page = 1;
    },
  },
});

const store = configureStore({
  reducer: movieSlice.reducer,
});

export const movieActions = movieSlice.actions;

export default store;
