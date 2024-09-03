import { useContext } from "react";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import { convertTimeFormat } from "../utils/dateFormatter";
import {
  DashboardContext,
  TemperatureTogglerContext,
} from "../organisms/Dashboard";
import { IData } from "../types/data";

const DashboardLeft = () => {
  const data: IData = useContext(DashboardContext);
  const isCelsius = useContext(TemperatureTogglerContext);
  return (
    <div className="dashboard__left">
      <div className="dashboard__left__top">
        <Icon src="/logo.png" alt="logo" />
      </div>
      <div className="dashboard__left__bottom bottom">
        <div className="bottom__temp__container">
          <Text
            type="p"
            content={isCelsius ? data?.current.temp_c : data?.current.temp_f}
            className="bottom__temp__container--value"
            id="bottom__temp__container--value"
          />
          {isCelsius ? (
            <Text
              type="p"
              content=""
              className="bottom__temp__container--degree"
              id="bottom__temp__container--degree"
            />
          ) : (
            <Text
              type="p"
              content="F"
              className="bottom__temp__container--fahrenheit"
              id="bottom__temp__container--fahrenheit"
            />
          )}
        </div>
        <div className="bottom__cityinfo__container">
          <Text
            type="p"
            content={data?.location.name}
            className="bottom__cityinfo__container--name"
            id="bottom__cityinfo__container--name"
          />
          <Text
            type="p"
            content={convertTimeFormat(data?.location.localtime)}
            className="bottom__cityinfo__container--datetime"
            id="bottom__cityinfo__container--datetime"
          />
        </div>
        <div className="bottom__weather--icon">
          <Icon src={data?.current.condition.icon} alt="Cloudy" />
        </div>
      </div>
    </div>
  );
};

export default DashboardLeft;
