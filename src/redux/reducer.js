const bugAdded = "BUG_ADDED";
const bugRemoved = "BUG_REMOVED";
const bugResolved = "BUG_RESOLVED";

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

export const resolveBugById = (id) => ({ type: bugResolved, payload: { id } });

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
    case bugResolved:
      return state.map((_) => {
        return _.id === action.payload.id ? { ..._, resolved: true } : _;
      });
    default:
      return state;
  }
};
