import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import {
  getModernApi,getGeneralTradeApi
} from '../../api/modern';

import actions from './action';



function* callSendModernDetails(action) {
  try {
    let apiResponse = yield call(getModernApi, action.payload);
    let { data, status } = apiResponse;
    yield put({
      type: actions.GET_MODERN_SUC,
      statusCode: status,
      modernDetails: data,
    });
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.GET_MODERN_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.GET_MODERN_FAIL,
      payload: err.message,
    });
  }
}


function* callSendGeneralDetails(action) {
  try {
    let apiResponse = yield call(getGeneralTradeApi, action.payload);
    let { data, status } = apiResponse;
    yield put({
      type: actions.GET_GENERAL_SUC,
      statusCode: status,
      generalDetails: data,
    });
  } catch (err) {
    if (err && err?.response) {
      yield put({
        type: actions.GET_GENERAL_FAIL,
        payload: err.response.message,
      });
    }
    yield put({
      type: actions.GET_GENERAL_FAIL,
      payload: err.message,
    });
  }
}


export function* getModern() {
  yield takeEvery(actions.GET_MODERN_REQ, callSendModernDetails);
}

export function* getGeneral() {
  yield takeEvery(actions.GET_GENERAL_REQ, callSendGeneralDetails);
}

export default function* modernSaga() {
  return yield all([
   
    fork(getModern),
    fork(getGeneral)
   
  ]);
}