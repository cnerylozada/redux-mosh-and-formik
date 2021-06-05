import { createStore } from "redux";
import { reducer } from "./bugs";

export const store = createStore(reducer);
