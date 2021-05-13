const bugAdded = "BUG_ADDED";
const bugRemoved = "BUG_REMOVED";

export const addBug = (description) => ({
  type: bugAdded,
  payload: {
    description,
  },
});

export const removeBugById = (id) => ({
  type: bugRemoved,
  payload: {
    id,
  },
});

const initialState = [];
let idCounter = 0;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case bugAdded:
      return [
        ...state,
        {
          id: ++idCounter,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved:
      return state.filter((_) => _.id !== action.payload.id);
    default:
      return state;
  }
};
