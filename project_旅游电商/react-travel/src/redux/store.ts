import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import languageReducer from "./language/languageReducer";
import { stateLog } from "./middlewares/stateLog";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import { productDetailSlice } from "./productDetail/productDetailSlice";
import { productSearchSlice } from "./productSearch/productSearchSlice";

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
});

// 原生createStore 
// const store = createStore(rootReducer, applyMiddleware(thunk));

// 与原生原生createStore功能类似 但支持createAsyncThunk
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), stateLog],
    devTools: true,
});

// typescript 类型约束
export type RootState = ReturnType<typeof store.getState>;

export default store;