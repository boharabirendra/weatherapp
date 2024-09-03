export const config = {
  API_KEY: import.meta.env.VITE_WEATHER_API_KEY,
};

export const getUrl = (city = "Kathmandu") => {
  return `https://api.weatherapi.com/v1/current.json?key=${config.API_KEY}&q=${city}`;
};

export const getSuggestionUrl = (city: string) => {
  return `https://api.weatherapi.com/v1/search.json?key=${config.API_KEY}&q=${city}`;
};
