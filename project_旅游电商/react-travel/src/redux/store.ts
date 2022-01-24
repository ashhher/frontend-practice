import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import languageReducer from "./language/languageReducer";
import { stateLog } from "./middlewares/stateLog";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, stateLog));

// typescript 类型约束
export type RootState = ReturnType<typeof store.getState>;

export default store;