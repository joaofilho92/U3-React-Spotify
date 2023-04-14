import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import searchReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const bigReducer = combineReducers({
  search: searchReducer
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store)