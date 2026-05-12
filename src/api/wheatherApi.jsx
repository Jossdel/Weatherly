import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const DEFAULT_CITY = "San Pedro De Macoris";
const DEFAULT_COUNTRY = "Dominican Republic";
export const searchLocations = async (query) => {
  let response = await axios.get(`https://api.weatherapi.com/v1/search.json`, {
    params: {
      key: apiKey,
      q: query,
      DEFAULT_COUNTRY,
    },
  });

  const dominicanResults = response.data.filter(
    (location) => location.country === "Dominican Republic",
  );

  return dominicanResults;
};

export const getClima = async (city = DEFAULT_CITY) => {
  let response = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json`,
    {
      params: {
        key: apiKey,
        q: city,
        days: 5,
      },
    },
  );

  return response.data;
};
