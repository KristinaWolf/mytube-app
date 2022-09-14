import { all } from 'redux-saga/effects';
import { watchContent } from './content/effects';

export default function* rootSaga() {
  yield all([watchContent()]);
}