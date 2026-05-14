import { useState } from "react";

export const NextsDays = ({ clima }) => {
  // Aquí sacamos TODOS los días del forecast
  const forecastDays = clima.forecast.forecastday;

  // Día activo por defecto
  const [activeDay, setActiveDay] = useState(forecastDays[0].date);

  // Filtrar el día seleccionado
  const selectedDay = forecastDays.find((day) => day.date === activeDay);

  return (
    <div className="p-6">
      {/* BOTONES DE DÍAS */}
      <div className="flex gap-5 mb-6 flex-wrap">
        {forecastDays.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(day.date)}
            className={`px-4 py-2 rounded-xl cursor-pointer transition h-13 
              ${
                activeDay === day.date
                  ? "bg-slate-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
          >
            {day.date}
          </button>
        ))}
      </div>

      {/* TARJETAS DEL DÍA */}
      <div className="grid grid-cols-4 gap-4">
        {selectedDay.hour
          .filter((_, index) => index % 3 === 0) // cada 3 horas
          .map((hour, index) => (
            <div
              key={index}
              className="bg-slate-200 rounded-2xl p-4 flex flex-col items-center gap-3"
            >
              {/* Hora */}
              <p className="text-xl font-semibold">{hour.time.split(" ")[1]}</p>

              {/* Icono */}
              <img
                src={`https:${hour.condition.icon}`}
                alt=""
                className="w-16 h-16"
              />

              {/* Temperatura */}
              <h1 className="text-3xl font-bold">{hour.temp_c}°C</h1>

              {/* Condición */}
              <p className="text-gray-700">{hour.condition.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
