import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNews as onGetData,
  getWeather as onGetWeather,
  addNewsDetail as onAddNewsDetail,
  clearNews as onClearNews,
} from "./../store/actions";
import { Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import WeatherComponent from "./../components/Weather";
import NewsCardComponent from "./../components/NewsCard";
import HeadlineComponent from "./../components/Headline";
import Lottie from "lottie-react";
import LoadingAnimation from "./../assets/animations/Loading.json";
import "./style.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { News, Weather } = useSelector((state) => ({
    News: state.News?.data,
    Weather: state.Weather.data,
  }));

  useEffect(() => {
    dispatch(onClearNews());
    if (i18n.language === "en") {
      dispatch(onGetWeather("en", "london"));
      dispatch(onGetData("en", "sport"));
    } else {
      dispatch(onGetWeather("tr", "ankara"));
      dispatch(onGetData("tr", "sport"));
    }
  }, [dispatch, i18n.language]);

  const handleCardClick = useCallback((item) => {
    dispatch(onAddNewsDetail(item));
    navigate("/news/detail");
  }, [dispatch,navigate]);

  let firstNews, secondNews, thirdNews, restNews;
  if (News && News.length > 2) {
    [firstNews, secondNews, thirdNews, ...restNews] = News;
  } else {
    return (
      <Container>
        <Lottie loop={true} animationData={LoadingAnimation} />
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <div className="col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="dashboard-first-area">
            <HeadlineComponent
              data={firstNews}
              handleCardClick={handleCardClick}
            />
            {Weather.length > 0 ? <WeatherComponent weather={Weather} /> : null}
          </div>
        </div>
        <div className="col-xxl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <div>
            <NewsCardComponent
              data={secondNews}
              handleCardClick={handleCardClick}
            />
            <NewsCardComponent
              data={thirdNews}
              handleCardClick={handleCardClick}
            />
          </div>
        </div>
      </Row>

      <Row>
        {restNews.map((item, index) => (
          <div
            className="col-xxl-4 col-lg-4 col-md-4 col-sm-12 col-12"
            key={index}
          >
            <NewsCardComponent data={item} handleCardClick={handleCardClick} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
