import {
    GET_WEATHER,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL
} from "./actionTypes";

export const getWeather = (language,city) => ({
    type: GET_WEATHER,
    payload:language,city
});

export const getWeatherSuccess = (data) => ({
    type: GET_WEATHER_SUCCESS,
    payload: data,
});

export const getWeatherFail = (error) => ({
    type: GET_WEATHER_FAIL,
    payload: error,
});
