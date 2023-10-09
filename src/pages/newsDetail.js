import React, { useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "reactstrap";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DefaultNewPic from "./../assets/images/news-default.jpeg";
import NewsSidebar from "./../components/NewsSidebar";
import {
  addNewsDetail as onAddNewsDetail,
  getNews as onGetData,
} from "./../store/actions";

const NewsDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { NewsDetail, News } = useSelector((state) => ({
    NewsDetail: state.News?.newsDetail,
    News: state.News?.data,
  }));

  const handleValidDate = (date) => {
    if (date) {
      const date1 = moment(new Date(date)).format("DD.MM.YYYY HH:mm");
      return date1;
    } else {
      return "";
    }
  };
  
  const filteredData = useMemo(() => {
    return News ? News.slice(0, 5) : [];
  }, [News]);
  
  const handleCardClick = useCallback((item) => {
    dispatch(onAddNewsDetail(item));
    navigate("/news/detail");
  }, [dispatch,navigate]);

  useEffect(() => {
    if (i18n.language === "en") {
      dispatch(onGetData("en", "general"));
    } else {
      dispatch(onGetData("tr", "general"));
    }
  }, [dispatch, i18n.language]);
 
  if (!NewsDetail) {
    return (
      <Container>
        <div className="loading-area">{t("Loading")}...</div>
      </Container>
    );
  }
  
  return (
    <Container>
      <Row>
        <div className="col-xl-8 col-md-12 col-sm-12 col-xs-12 col-12">
          <p className="news-detail-title">{NewsDetail.name}</p>
          <img
            className="news-detail-img"
            src={NewsDetail.image || DefaultNewPic}
            alt="news"
            loading="lazy"
          />
          <p className="news-detail-content">{NewsDetail.description}</p>
          <div className="news-detail-footer">
            <p>{NewsDetail.source}</p>
            <p>{handleValidDate(NewsDetail.date)}</p>
            <a
              className="news-detail-url"
              href={NewsDetail.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {NewsDetail.url}
            </a>{" "}
          </div>
        </div>
        <div className="col-xl-4 col-md-12 col-sm-12 col-xs-12 col-12">
          {News && News.length > 0 && (
            <NewsSidebar
              news={filteredData}
              handleCardClick={handleCardClick}
            />
          )}
        </div>
      </Row>
    </Container>
  );
};

export default NewsDetail;
