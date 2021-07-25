import { createAction, createReducer } from "@reduxjs/toolkit";

export const addBug = createAction("BUG_ADDED");
export const removeBugById = createAction("BUG_REMOVED");
export const resolveBugById = createAction("BUG_RESOLVED");

let idCounter = 0;

export const reducer = createReducer([], {
  [addBug.type]: (bugs, action) => {
    bugs.push({
      id: ++idCounter,
      description: action.payload.description,
      resolved: false,
    });
  },
  [removeBugById.type]: (bugs, action) => {
    const index = bugs.findIndex((_) => _.id === action.payload.id);
    bugs.splice(index, 1);
  },
  [resolveBugById.type]: (bugs, action) => {
    const index = bugs.findIndex((_) => _.id === action.payload.id);
    bugs[index].resolved = true;
  },
});
