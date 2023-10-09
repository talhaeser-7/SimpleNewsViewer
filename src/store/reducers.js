import { combineReducers } from "redux"
import News from "./news/reducer"
import Weather from "./weather/reducer"

const rootReducer = combineReducers({
  News,
  Weather
})

export default rootReducer
