import { combineReducers, configureStore } from "@reduxjs/toolkit";
import entitiesReducer from "./entities";

const reducer = combineReducers({
  entities: entitiesReducer,
});

export const store = configureStore({ reducer });
