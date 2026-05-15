import axios from "axios";
import type { LocationSearchResult, WeatherData } from "../types/weather";

const apiKey = import.meta.env.VITE_API_KEY;
const DEFAULT_CITY = "San Pedro De Macoris";
const DEFAULT_COUNTRY = "Dominican Republic";

export const searchLocations = async (
  query: string,
): Promise<LocationSearchResult[]> => {
  const response = await axios.get<LocationSearchResult[]>(
    "https://api.weatherapi.com/v1/search.json",
    {
      params: {
        key: apiKey,
        q: query,
        DEFAULT_COUNTRY,
      },
    },
  );

  return response.data.filter(
    (location) => location.country === "Dominican Republic",
  );
};

export const getClima = async (city = DEFAULT_CITY): Promise<WeatherData> => {
  const response = await axios.get<WeatherData>(
    "https://api.weatherapi.com/v1/forecast.json",
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
