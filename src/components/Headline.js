import React ,{memo}from "react";
import PropTypes from "prop-types";
import DefaultNewPhoto from "./../assets/images/news-default.jpeg";
const Headline = (props) => {
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
        onClick={() => {
          props.handleCardClick(props.data);
        }}
        style={{ position: "relative" }}
      >
        <img
          src={imageSource}
          alt="news"
          className="dashboard-top-img"
          loading="lazy"
        />
        <div className="first-new-text-area">
          <span className="first-new-text">{props.data?.name}</span>
        </div>
      </div>
    </React.Fragment>
  );
};
Headline.propTypes = {
  data: PropTypes.any,
  handleCardClick: PropTypes.func,
};
export default memo(Headline);
