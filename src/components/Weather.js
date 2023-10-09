import React , {memo} from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
const Weather = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="weather">
        <p className="weather-text">{t("Weather")} </p>
        <div className="weather-area">
          {props.weather.map((item, index) => (
            <div className="weather-div" key={"weather" + index}>
              <p className="weather-day">{item.day}</p>
              <img
                src={item.icon}
                alt="weather icon"
                className="weather-icon"
                loading="lazy"
              />
              <p className="weather-degree">{Math.floor(item.degree)}°</p>
            </div>
          ))} 
        </div>
      </div>
    </React.Fragment>
  );
};
Weather.propTypes = {
  weather: PropTypes.any,
};
export default memo(Weather);
