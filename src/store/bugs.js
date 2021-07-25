import { createSlice } from "@reduxjs/toolkit";

let idCounter = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    addBug: (bugs, action) => {
      bugs.push({
        id: ++idCounter,
        description: action.payload.description,
        resolved: false,
      });
    },
    removeBugById: (bugs, action) => {
      const index = bugs.findIndex((_) => _.id === action.payload.id);
      bugs.splice(index, 1);
    },
    resolveBugById: (bugs, action) => {
      const index = bugs.findIndex((_) => _.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});

export const { addBug, removeBugById, resolveBugById } = slice.actions;
export default slice.reducer;
