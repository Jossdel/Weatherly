import { OwnDate } from "../utils/date";

export const OverviewMain = ({ clima }) => {
  return (
    <div>
      <h1 className="text-black text-4xl p-4 font-semibold ">Today Overview</h1>
      {/* Container */}
      <div className=" flex justify-start  max-h-[34.3rem]  ">
        <div className=" w-full grid  grid-cols-4 px-4 gap-4 ">
          <div className=" rounded-2xl">
            {/* main card */}
            <div className="flex flex-col gap-8 items-start p-10  bg-slate-200  rounded-2xl">
              {
                <img
                  className=" w-30 h-30 rounded-lg  p-2  bg-slate-200"
                  src={`https:${clima.current.condition.icon}`}
                  alt="Weather Icon"
                />
              }
              <span className="text-4xl font-semibold">
                {clima.current.temp_c}°C
              </span>
              <span className="text-lg">{clima.current.condition.text}</span>
              <div className="w-full h-[0.1px] bg-gray-400 "></div>
              <span className="text-lg">{clima.location.country}</span>
              <span className="text-lg">{clima.location.name}</span>
              <span className="text-lg">
                <OwnDate clima={clima} />
              </span>
            </div>
          </div>
          {/* mini cards-1 */}
          <div className=" flex flex-col gap-16  ">
            <div className="p-4 bg-slate-200 rounded-2xl flex flex-col items-center">
              <p>Wind Speed</p>
              <span className=" text-2xl ">{clima.current.wind_kph} km/h</span>
            </div>
            <div className="p-4 bg-slate-200 rounded-2xl flex flex-col items-center">
              <p>Atmospheric Pressure</p>
              <span className=" text-2xl ">
                {clima.current.pressure_mb} hPa
              </span>
            </div>
            <div className="p-4 bg-slate-200 rounded-2xl flex flex-col items-center">
              <p>Temperature</p>
              <span className=" text-2xl ">
                {clima.forecast.forecastday[0].day.maxtemp_c}
              </span>
            </div>
            <div className="p-4 bg-slate-200 rounded-2xl flex flex-col items-center">
              <p>Sunrise</p>
              <span className=" text-2xl ">
                {clima.forecast.forecastday[0].astro.sunrise}
              </span>
            </div>
          </div>

          {/* mini cards-2 */}
          <div className=" flex flex-col gap-16  ">
            <div className="p-4 bg-slate-200 rounded-2xl flex flex-col items-center">
              <p>Humidity</p>
              <span className=" text-2xl ">{clima.current.humidity}%</span>
            </div>
            <div className="p-4 bg-slate-200 rounded-2xl flex flex-col items-center">
              <p>Visibility</p>
              <span className=" text-2xl ">{clima.current.vis_km} m</span>
            </div>
            <div className="p-4 bg-slate-200 rounded-2xl flex flex-col items-center">
              <p>Chance of Rain</p>
              <span className=" text-2xl ">
                {clima.forecast.forecastday[0].day.daily_chance_of_rain}%
              </span>
            </div>
            <div className="p-4 bg-slate-200 rounded-2xl flex flex-col items-center">
              <p>Sunset</p>
              <span className=" text-2xl ">
                {clima.forecast.forecastday[0].astro.sunset}
              </span>
            </div>
          </div>
          <div className="text-xl bg-slate-200 rounded-2xl p-6 flex flex-col gap-5 ">
            {clima.forecast.forecastday[0].hour
              .filter((_, index) => index % 3 === 0) // cada 3 horas
              .slice(0, 5)
              .map((h, i) => (
                <div key={i} className="flex justify-between p-6">
                  <p>{h.time.split(" ")[1]}</p> {/* Ej: "03:00" */}
                  <p>{h.condition.text}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
