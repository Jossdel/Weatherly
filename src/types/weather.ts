export interface WeatherCondition {
  text: string;
  icon: string;
}

export interface WeatherHour {
  time: string;
  temp_c: number;
  condition: WeatherCondition;
}

export interface ForecastDayInfo {
  maxtemp_c: number;
  daily_chance_of_rain: number;
}

export interface ForecastAstro {
  sunrise: string;
  sunset: string;
}

export interface ForecastDay {
  date: string;
  day: ForecastDayInfo;
  astro: ForecastAstro;
  hour: WeatherHour[];
}

export interface WeatherData {
  location: {
    localtime: string;
    country: string;
    name: string;
  };
  current: {
    condition: WeatherCondition;
    temp_c: number;
    wind_kph: number;
    pressure_mb: number;
    humidity: number;
    vis_km: number;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
}

export interface LocationSearchResult {
  name: string;
  country: string;
}
