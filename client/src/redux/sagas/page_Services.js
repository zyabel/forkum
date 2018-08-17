import { put, takeEvery, call } from 'redux-saga/effects';
import {
  PAGE_GETDATA_SUCCESS,
  PAGE_GETDATA_REQUEST,
  PAGE_GETDATA_FAILURE,
} from '../constants';

import { SERVICES } from '../constants/prefix';

import TransferData from '../Api/transferData';

function* pageServicesGetDataAsync(action) {
  try {
    const pageData = yield call(TransferData.dataServicesPage);

    yield put({
      type: `${SERVICES}_${PAGE_GETDATA_SUCCESS}`,
      payload: pageData,
    });
  } catch (e) {
    yield put({ type: `${SERVICES}_${PAGE_GETDATA_FAILURE}` });
  }
}

export default function* pageServicesGetData() {
  yield takeEvery(
    `${SERVICES}_${PAGE_GETDATA_REQUEST}`,
    pageServicesGetDataAsync
  );
}
