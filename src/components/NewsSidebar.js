import React,{memo} from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
const NewsSidebar = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="sidebar">
        <p className="weather-text"> {t("NEWS THAT MIGHT INTEREST YOU")}</p>
        <hr />
        <div className="news-sidebar-area">
          {props.news.map((item, index) => (
            <div
              className="news-sidebar"
              key={"sidebar" + index}
              onClick={() => {
                props.handleCardClick(item);
              }}
            >
              <img
                src={item.image}
                alt="news"
                className="news-sidebar-photo"
                loading="lazy"
              />
              <p className="weather-day">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
NewsSidebar.propTypes = {
  news: PropTypes.any,
  handleCardClick: PropTypes.func,
};
export default memo(NewsSidebar);
