import { put, takeEvery, call } from 'redux-saga/effects';
import {
  PAGE_GETDATA_SUCCESS,
  PAGE_GETDATA_REQUEST,
  PAGE_GETDATA_FAILURE,
} from '../constants';

import { PRODUCTS } from '../constants/prefix';

import TransferData from '../Api/transferData';

function* pageProductsGetDataAsync(action) {
  try {
    const pageData = yield call(TransferData.dataProductPage);

    yield put({
      type: `${PRODUCTS}_${PAGE_GETDATA_SUCCESS}`,
      payload: pageData,
    });
  } catch (e) {
    yield put({ type: `${PRODUCTS}_${PAGE_GETDATA_FAILURE}` });
  }
}

export default function* pageProductsGetData() {
  yield takeEvery(
    `${PRODUCTS}_${PAGE_GETDATA_REQUEST}`,
    pageProductsGetDataAsync
  );
}
