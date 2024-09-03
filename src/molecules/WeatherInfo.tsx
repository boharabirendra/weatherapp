import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import { IWeatherInfo } from "../types/weatherInfo";

const WeatherInfo = ({ name, value, src }: IWeatherInfo) => {
  return (
    <div className="weatherinfo">
      <Text type="p" content={name} className="weatherinfo__name" />
      <div className="weatherinfo__right">
        <Text type="p" content={value} className="weatherinfo__value" />
        <Icon src={src} alt="Wind" className="weatherinfo__icon" />
      </div>
    </div>
  );
};

export default WeatherInfo;
