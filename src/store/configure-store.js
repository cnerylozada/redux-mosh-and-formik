import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

export const store = configureStore({ reducer });
