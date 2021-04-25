import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bug";

const store = configureStore({ reducer });

export default store;