import { useState } from "react";
import { ownDateDays } from "../utils/date.utils";
import type { WeatherData } from "../types/weather";

interface NextDaysProps {
  clima: WeatherData;
}

export const NextsDays = ({ clima }: NextDaysProps) => {
  const days = ownDateDays(clima);
  const [activeDay, setActiveDay] = useState<string>(days[0]?.date ?? "");
  const selectedDay = days.find((day) => day.date === activeDay) ?? days[0];

  if (!selectedDay) {
    return null;
  }

  return (
    <div className="p-4  ">
      <div className="flex gap-5 mb-6 flex-wrap">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveDay(day.date);
            }}
            className={`px-4 py-2 rounded-xl cursor-pointer transition h-13
              ${
                activeDay === day.date
                  ? "bg-slate-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
          >
            {day.text} {day.day}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {selectedDay.hour
          .filter((_, index) => index % 3 === 0)
          .map((hour, index) => (
            <div
              key={index}
              className="bg-slate-200 rounded-2xl p-4 flex flex-col items-center gap-3"
            >
              <p className="text-xl font-semibold">{hour.time.split(" ")[1]}</p>

              <img
                src={`https:${hour.condition.icon}`}
                alt=""
                className="w-16 h-16"
              />

              <h1 className="text-3xl font-bold">{hour.temp_c}°C</h1>
              <p className="text-gray-700">{hour.condition.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
