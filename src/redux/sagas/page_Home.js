import { put, takeEvery, call } from 'redux-saga/effects';
import {
  PAGE_HOME_GETDATA_SUCCESS,
  PAGE_HOME_GETDATA_REQUEST,
  PAGE_HOME_GETDATA_FAILURE,
} from '../constants';
import Api from '../Api';

function* pageHomeGetDataAsync(action) {
  try {
    const pageData = yield call(Api.dataLocalHomePage);

    yield put({ type: PAGE_HOME_GETDATA_SUCCESS, payload: pageData });
  } catch (e) {
    yield put({ type: PAGE_HOME_GETDATA_FAILURE });
  }
}

export default function* pageHomeGetData() {
  yield takeEvery(PAGE_HOME_GETDATA_REQUEST, pageHomeGetDataAsync);
}
