import { createAction } from "@reduxjs/toolkit";

export const addBug = createAction("BUG_ADDED");
export const removeBugById = createAction("BUG_REMOVED");
export const resolveBugById = createAction("BUG_RESOLVED");

const initialState = [];
let idCounter = 0;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addBug.type:
      return [
        ...state,
        {
          id: ++idCounter,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case removeBugById.type:
      return state.filter((_) => _.id !== action.payload.id);
    case resolveBugById.type:
      return state.map((_) => {
        return _.id === action.payload.id ? { ..._, resolved: true } : _;
      });
    default:
      return state;
  }
};
