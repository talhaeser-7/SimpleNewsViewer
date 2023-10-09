import {
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL,
} from "./actionTypes";
 
const INIT_STATE = {
    data: [], 
    error: null,
}; 

const Weather = (state = INIT_STATE, action) => {
    switch (action.type) { 
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                data: action.payload.result
            }
        //FAILS
        case GET_WEATHER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}


export default Weather;