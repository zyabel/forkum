import { put, takeEvery, call } from 'redux-saga/effects';
import { GETDATA_SUCCESS, GETDATA_REQUEST, GETDATA_FAILURE } from '../actions';

import TransferData from '../Api/transferData';

function* getDataAsync(action) {
  try {
    const pageData = yield call(TransferData.data);

    yield put({ type: GETDATA_SUCCESS, payload: pageData });
  } catch (e) {
    yield put({ type: GETDATA_FAILURE });
  }
}

export default function* getData() {
  yield takeEvery(GETDATA_REQUEST, getDataAsync);
}
