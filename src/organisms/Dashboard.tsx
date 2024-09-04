import axios from "axios";
import { createContext, useRef, useState } from "react";

import useInput from "../hooks/useInput";
import useFetch from "../hooks/useFetch";

import { IData, initialData } from "../types/data";
import { getSuggestionUrl, getUrl } from "../config";
import DashboardLeft from "../molecules/DashboardLeft";
import DashboardRight from "../molecules/DashboardRight";
import { WeatherType } from "../data/weatherType";

const initialValue = { city: "Kathmandu" };

export const DashboardContext = createContext<IData>(initialData);
export const TemperatureTogglerContext = createContext(true);

const Dashboard = () => {
  const [url, setUrl] = useState(getUrl(initialValue.city));
  const dashboardRef = useRef(null);
  const [suggestion, setSuggestion] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);
  const [value, handleChange] = useInput(initialValue);
  const [data, loading, error] = useFetch(url);

  const handleSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSuggestion([]);
      setUrl(getUrl(value.city));
      const weatherType = getWeatherType(data?.current.condition.code)
        ? getWeatherType(data?.current.condition.code)
        : "sunny";
      console.log(weatherType);
      // @ts-ignore
      dashboardRef.current.style.backgroundImage = `url(/${weatherType}.jpg)`;
      return;
    }

    const handler = setTimeout(async () => {
      const response = await axios(getSuggestionUrl(value.city));
      setSuggestion(response.data);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  };

  const handleSuggestionClick = (e: any) => {
    setUrl(getUrl(e.currentTarget.dataset.value));
    value.city = e.currentTarget.dataset.value;
    const weatherType = getWeatherType(data?.current.condition.code);
    // @ts-ignore
    dashboardRef.current.style.backgroundImage = `url(/${weatherType}.jpg)`;
    setSuggestion([]);
  };

  const toggleTemperature = () => {
    setIsCelsius(isCelsius ? false : true);
  };

  function getWeatherType(code: number): string | undefined {
    console.log(code);
    for (const [key, values] of Object.entries(WeatherType)) {
      if (values.includes(code)) {
        return key;
      }
    }
    return undefined;
  }

  return (
    <DashboardContext.Provider value={data}>
      <div className="dashboard" ref={dashboardRef}>
        <TemperatureTogglerContext.Provider value={isCelsius}>
          <DashboardLeft />
        </TemperatureTogglerContext.Provider>
        <DashboardRight
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value={value}
          error={error}
          loading={loading}
        />
        {suggestion.length ? (
          <div className="suggestion">
            <ul>
              {suggestion.map((city: any, index) => (
                <li
                  key={index}
                  onClick={handleSuggestionClick}
                  data-value={city.name}
                >
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
        <button onClick={toggleTemperature} className="toggle__temperature">
          {isCelsius ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
