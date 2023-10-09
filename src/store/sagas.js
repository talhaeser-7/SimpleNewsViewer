import { all, fork } from "redux-saga/effects"

import newsSaga from "./news/saga"
import weatherSaga from "./weather/saga"

export default function* rootSaga() {
  yield all([
    fork(newsSaga),
    fork(weatherSaga),
  ])
} 
