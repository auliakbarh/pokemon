import {all} from 'redux-saga/effects';

import combinedSaga from './combinedSaga';

export default function* rootSaga() {
  yield all(combinedSaga);
}
