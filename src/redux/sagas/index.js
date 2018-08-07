import { all } from 'redux-saga/effects';
import pageHome from './page_Home';

export default function* rootSaga() {
  yield all([pageHome()]);
}
