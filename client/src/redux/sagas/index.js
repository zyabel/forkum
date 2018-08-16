import { all } from 'redux-saga/effects';
import pageHomeGetData from './page_Home';
import pageServicesGetData from './page_Services';

export default function* rootSaga() {
  yield all([pageHomeGetData(), pageServicesGetData()]);
}
