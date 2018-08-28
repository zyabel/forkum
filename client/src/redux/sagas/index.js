import { all } from 'redux-saga/effects';
import pageHomeGetData from './page_Home';
import pageServicesGetData from './page_Services';
import pageProductsGetData from './page_Products';
import getData from './init';

export default function* rootSaga() {
  yield all([
    pageHomeGetData(),
    pageServicesGetData(),
    pageProductsGetData(),
    getData(),
  ]);
}
