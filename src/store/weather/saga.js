import { call, put, takeEvery } from "redux-saga/effects";
import { GET_WEATHER} from "./actionTypes";
import { getWeatherSuccess, getWeatherFail,} from "./actions";
import { getWeather} from "../../helpers/fakebackend_helper"; 

function* fetchWeather({payload:language,city}) { 
    try {
        const response = yield call(getWeather,language,city)
        yield put(getWeatherSuccess(response));
    } catch (error) {
        yield put(getWeatherFail(error));
    }
}

export function* datasSaga() {
    yield takeEvery(GET_WEATHER, fetchWeather);
}

export default datasSaga;
