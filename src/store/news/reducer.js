import {
  GET_NEWS_SUCCESS,
  GET_NEWS_FAIL,
  ADD_NEWS_DETAIL_SUCCESS,
  ADD_NEWS_DETAIL_FAIL,
  CLEAR_NEWS_SUCCESS,
  CLEAR_NEWS_FAIL 
} from "./actionTypes";

const INIT_STATE = {
  data: [],
  error: null,
  newsDetail: [],
};

const News = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        data: action.payload.result,
      };

    case ADD_NEWS_DETAIL_SUCCESS:
      return {
        ...state,
        newsDetail: action.payload,
      };

    
      case CLEAR_NEWS_SUCCESS:
        return {
          ...state,
          data: [],
        };
    //FAILS
    case GET_NEWS_FAIL:
    case ADD_NEWS_DETAIL_FAIL:
    case CLEAR_NEWS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default News;
