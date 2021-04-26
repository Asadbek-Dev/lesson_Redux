import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import reducer from "./bug";

// const store = configureStore({ reducer });
const rootReducer = combineReducers({
    entities: reducer,
});
const store = createStore(rootReducer)

export default store;