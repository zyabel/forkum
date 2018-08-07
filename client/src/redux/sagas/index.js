import { all } from 'redux-saga/effects';
import pageHomeGetData from './page_Home';

export default function* rootSaga() {
  yield all([pageHomeGetData()]);
}
