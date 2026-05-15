import type { WeatherData, WeatherHour } from "../types/weather";

export interface FormattedDate {
  day: number;
  text: string;
}

export interface FormattedDayText {
  text: string;
}

export interface NextDayItem {
  date: string;
  day: number;
  text: string;
  hour: WeatherHour[];
}

export const ownDate = (clima: WeatherData): FormattedDate => {
  const apiTime = clima.location.localtime;
  const date = new Date(apiTime);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
  };

  const dateFormatted = date.toLocaleDateString("en-US", options);
  const mayusDate = dateFormatted.replace(/^\w/, (letter) => letter.toUpperCase());

  return {
    day: date.getDate(),
    text: mayusDate,
  };
};

export const ownDateDay = (day: Pick<WeatherHour, "time">): FormattedDayText => {
  const apiTime = day.time;
  const date = new Date(apiTime);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
  };

  const dateFormatted = date.toLocaleDateString("en-US", options);
  const mayusDate = dateFormatted.replace(/^\w/, (letter) => letter.toUpperCase());

  return {
    text: mayusDate.slice(0, 15),
  };
};

export const ownDateDays = (clima: WeatherData): NextDayItem[] => {
  return clima.forecast.forecastday.map((forecastDay) => {
    const date = new Date(forecastDay.date);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "long",
    };

    const dateFormatted = date.toLocaleDateString("en-US", options);
    const mayusDate = dateFormatted.replace(/^\w/, (letter) => letter.toUpperCase());

    return {
      date: forecastDay.date,
      day: date.getDate(),
      text: mayusDate,
      hour: forecastDay.hour,
    };
  });
};
