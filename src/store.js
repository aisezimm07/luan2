import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './store/favoritesSlice'; // В следующем шаге мы создадим этот файл

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;