import { all } from "redux-saga/effects";
import  modernSaga  from "../components/redux/saga";
export default function* rootSagas() {
  yield all([
    modernSaga()
  ]);
}