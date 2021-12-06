
import { combineReducers } from "redux";
import ModernReducer from "../components/redux/reducer";

const reducers = () =>
  combineReducers({
  Modern:ModernReducer,
  });

export default reducers;