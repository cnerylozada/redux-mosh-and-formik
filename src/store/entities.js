import { combineReducers } from "redux";
import bugReducer from "./bugs";

export default combineReducers({
  bugs: bugReducer,
});
