import { useContext } from "react";

import Text from "../atoms/Text";
import SearchBox from "./SearchBox";
import { IData } from "../types/data";
import WeatherInfo from "./WeatherInfo";
import { DashboardContext } from "../organisms/Dashboard";

const DashboardRight = ({
  handleSubmit,
  handleChange,
  value,
  loading,
  error,
}: any) => {
  const data: IData = useContext(DashboardContext);
  return (
    <div className="dashboard__right">
      <div className="dashboard__search__container">
        <SearchBox
          type="text"
          name="city"
          value={value.city}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          error={error}
        />
      </div>
      <div className="dashboard__right__textinfo">
        {loading && <Text type="p" content="loading..." />}
        <Text type="p" content="Weather Details..." />
      </div>
      <div className="dashboard__right__tempinfo">
        <Text
          type="p"
          content={data?.current.condition.text}
          className="dashboard__right__tempinfo--top"
        />
        <div className="dashboard__right__tempdetails">
          <WeatherInfo
            name="Humidity"
            value={data?.current.humidity}
            src="/humidity.png"
          />
          <WeatherInfo
            name="Cloud"
            value={data?.current.cloud}
            src="/cloud.png"
          />
          <WeatherInfo
            name="Wind"
            value={`${data?.current.wind_kph}km/h`}
            src="/wind.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;
