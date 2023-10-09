import React,{memo} from "react";
import PropTypes from "prop-types";
import DefaultNewPhoto from "./../assets/images/news-default.jpeg";
import { useTranslation } from "react-i18next";
const NewsCard = (props) => {
  const { i18n } = useTranslation();
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);  
    if (isNaN(dateObject.getTime())) {
      return { day: "", month: "" };
    }

    const day = ("0" + dateObject.getUTCDate()).slice(-2);
    const month = new Intl.DateTimeFormat(i18n.language, {
      month: "short",
    }).format(dateObject);

    return { day, month };
  };

  const test =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const imageSource =
    props.data?.image &&
    (props.data.image.includes(".png") ||
      props.data.image.includes(".jpg") ||
      props.data.image.includes(".jpeg"))
      ? props.data.image
      : DefaultNewPhoto;
  return (
    <React.Fragment>
      <div  
        className="news-card"
        onClick={() => {
          props.handleCardClick(props.data);
        }}
      >
        <div className="news-card-image">
          <img src={imageSource} alt="news" loading="lazy" />
        </div>
        <div className="date-area">
          <div className="date">
            <span className="day">{formatDate(props.data?.date).day}</span>
            <span className="month">{formatDate(props.data?.date).month}</span>
          </div>
          <h5>{props.data?.name}</h5>
          <p>
            {props.data?.description === "" ? test : props.data?.description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
NewsCard.propTypes = {
  data: PropTypes.any,
  handleCardClick: PropTypes.func,
};
export default memo(NewsCard);
