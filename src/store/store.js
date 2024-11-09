import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';
import authReducer from './authSlice'; // authSlice'ı içe aktarın
import userReducer from './userSlice'; // userSlice'ı içe aktarın
import clientReducer from './clientSlice'; // Yeni eklenen clientSlice
import productReducer from './productSlice'; // Yeni eklenen productSlice
import shoppingCartReducer from './shoppingCartSlice'; // Yeni eklenen shoppingCartSlice
import categoriesReducer from './categoriesSlice'; // Doğru yolu kullanarak import edin
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  auth: authReducer, // authReducer'ı rootReducer'a ekleyin
  user: userReducer, // userReducer'ı rootReducer'a ekleyin
  client: clientReducer, // clientReducer'ı rootReducer'a ekleyin
  product: productReducer, // productReducer'ı rootReducer'a ekleyin
  shoppingCart: shoppingCartReducer, // shoppingCartReducer'ı rootReducer'a ekleyin
  categories: categoriesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk, logger),
});

export const persistor = persistStore(store);
