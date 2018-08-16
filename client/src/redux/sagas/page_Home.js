import { put, takeEvery, call } from 'redux-saga/effects';
import {
  PAGE_GETDATA_SUCCESS,
  PAGE_GETDATA_REQUEST,
  PAGE_GETDATA_FAILURE,
} from '../constants';

import { HOME } from '../constants/prefix';

import TransferData from '../Api/transferData';

function* pageHomeGetDataAsync(action) {
  try {
    const pageData = yield call(TransferData.dataHomePage);

    yield put({ type: `${HOME}_${PAGE_GETDATA_SUCCESS}`, payload: pageData });
  } catch (e) {
    yield put({ type: `${HOME}_${PAGE_GETDATA_FAILURE}` });
  }
}

export default function* pagesGetData() {
  yield takeEvery(`${HOME}_${PAGE_GETDATA_REQUEST}`, pageHomeGetDataAsync);
}
