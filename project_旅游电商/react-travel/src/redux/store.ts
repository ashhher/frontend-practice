import { createStore } from "redux";
import languageReducer from "./language/languageReducer";

const store = createStore(languageReducer);

// typescript 类型约束
export type RootState = ReturnType<typeof store.getState>;

export default store;