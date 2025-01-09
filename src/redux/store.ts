import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchApi } from "../api/searchApi";


const reducers = combineReducers({
  [searchApi.reducerPath]: searchApi.reducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(searchApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch