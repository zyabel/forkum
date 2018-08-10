import { put, takeEvery, call } from 'redux-saga/effects';
import {
  PAGE_HOME_GETDATA_SUCCESS,
  PAGE_HOME_GETDATA_REQUEST,
  PAGE_HOME_GETDATA_FAILURE,
} from '../constants';

import TransferData from '../Api/transferData';

function* pageHomeGetDataAsync(action) {
  try {
    const pageData = yield call(TransferData.dataHomePage);

    yield put({ type: PAGE_HOME_GETDATA_SUCCESS, payload: pageData.Slides });
  } catch (e) {
    yield put({ type: PAGE_HOME_GETDATA_FAILURE });
  }
}

export default function* pageHomeGetData() {
  yield takeEvery(PAGE_HOME_GETDATA_REQUEST, pageHomeGetDataAsync);
}
