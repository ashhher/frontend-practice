import { createStore, combineReducers } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer
});

const store = createStore(rootReducer);

// typescript 类型约束
export type RootState = ReturnType<typeof store.getState>;

export default store;