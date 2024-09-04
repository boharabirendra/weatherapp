import { WeatherType } from "../data/weatherType";

export function getWeatherType(code: number): string | undefined {
  console.log(code);
  for (const [key, values] of Object.entries(WeatherType)) {
    if (values.includes(code)) {
      return key;
    }
  }
  return undefined;
}
