import { call, put, takeEvery,takeLatest } from "redux-saga/effects";
import { GET_NEWS,ADD_NEWS_DETAIL,CLEAR_NEWS} from "./actionTypes";
import {
    getNewsSuccess, getNewsFail,
    addNewsDetailSuccess,addNewsDetailFail,clearNewsSuccess 
 } from "./actions";

import { getNews} from "../../helpers/fakebackend_helper"; 
function* clearNewsSaga() {
  yield put(clearNewsSuccess());
}
function* fetchNews({payload:country,tag}) {
    try {
        const response = yield call(getNews,country,tag)
        yield put(getNewsSuccess(response));
    } catch (error) {
        yield put(getNewsFail(error));
    }
}

function* addNewsDetail({ payload: news }) {
    try {
      yield put(addNewsDetailSuccess(news));
    } catch (error) {
      yield put(addNewsDetailFail(error));
    }
  }

export function* datasSaga() {
    yield takeEvery(GET_NEWS, fetchNews);
    yield takeEvery(ADD_NEWS_DETAIL, addNewsDetail);
    yield takeLatest(CLEAR_NEWS, clearNewsSaga);
}

export default datasSaga;
