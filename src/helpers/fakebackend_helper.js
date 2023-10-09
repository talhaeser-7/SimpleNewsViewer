import {get} from "./api_helper"
import * as url from "./url_helper"

export const getNews = (country,tag) => get(url.GET_NEWS+"?country="+country+"&tag="+tag);
export const getWeather = (language,city) => get(url.GET_WEATHER+"?data.lang="+language+"&data.city=+"+city);




