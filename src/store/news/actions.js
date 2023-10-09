import {
    GET_NEWS,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAIL,

    ADD_NEWS_DETAIL,
    ADD_NEWS_DETAIL_SUCCESS,
    ADD_NEWS_DETAIL_FAIL,
    
    CLEAR_NEWS,
    CLEAR_NEWS_SUCCESS,
    CLEAR_NEWS_FAIL 
    
} from "./actionTypes"; 

export const clearNews = () => ({
    type: CLEAR_NEWS,
});

export const clearNewsSuccess = (data) => ({
    type: CLEAR_NEWS_SUCCESS,
    payload: data,
});

export const clearNewsFail = (error) => ({
    type: CLEAR_NEWS_FAIL,
    payload: error,
});

export const getNews = (country,tag) => ({
    type: GET_NEWS,
    payload : country , tag
});

export const getNewsSuccess = (data) => ({
    type: GET_NEWS_SUCCESS,
    payload: data,
});

export const getNewsFail = (error) => ({
    type: GET_NEWS_FAIL,
    payload: error,
});

export const addNewsDetail = (news) => ({
    type: ADD_NEWS_DETAIL,
    payload : news
});

export const addNewsDetailSuccess = (data) => ({
    type: ADD_NEWS_DETAIL_SUCCESS,
    payload: data,
});

export const addNewsDetailFail = (error) => ({
    type: ADD_NEWS_DETAIL_FAIL,
    payload: error,
});