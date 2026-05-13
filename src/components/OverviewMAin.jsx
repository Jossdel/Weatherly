import { ownDate, ownDateDay } from "../utils/date.utils";

export const OverviewMain = ({ clima }) => {
  return (
    <main>
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
              <div className="text-4xl font-semibold">
                {clima.current.temp_c}°C
              </div>
              <div className="text-lg">{clima.current.condition.text}</div>
              <div className="w-full h-[0.1px] bg-gray-400 "></div>
              <div className="text-lg">{clima.location.country}</div>
              <div className="text-lg">{clima.location.name}</div>
              <div className="text-lg">
                {(() => {
                  const { day, text } = ownDate(clima);

                  return (
                    <p>
                      {day} {text}
                    </p>
                  );
                })()}
              </div>
            </div>
          </div>
          {/* mini cards-1 */}
          <div className=" flex flex-col gap-16  ">
            <div className="p-4 bg-slate-200 rounded-2xl grid grid-cols-3  ">
              <img
                className=" w-25 h-13  self-center"
                src="/src/assets/icons/brand-speedtest (1).svg"
                alt="cloud-icon"
              />{" "}
              <div className="grid col-span-2">
                <p>Wind Speed</p>
                <div className=" text-2xl ">{clima.current.wind_kph} km/h</div>
                {/* wind_kph */}
              </div>
            </div>
            <div className="p-4 bg-slate-200 rounded-2xl grid grid-cols-3  ">
              <img
                className=" w-25 h-13 self-center"
                src="/src/assets/icons/gauge.svg"
                alt="cloud-icon"
              />{" "}
              <div className="grid col-span-2">
                <p>Atmospheric Pressure</p>
                <div className=" text-2xl ">
                  {clima.current.pressure_mb} hPa
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-200 rounded-2xl grid grid-cols-3  ">
              <img
                className=" w-25 h-13 self-center"
                src="/src/assets/icons/temperature.svg"
                alt="cloud-icon"
              />{" "}
              <div className="grid col-span-2">
                <p>Temperature</p>
                <div className=" text-2xl ">
                  {clima.forecast.forecastday[0].day.maxtemp_c}ºC
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-200 rounded-2xl grid grid-cols-3  ">
              <img
                className=" w-25 h-14 self-center"
                src="/src/assets/icons/sunrise.svg"
                alt="cloud-icon"
              />{" "}
              <div className="grid col-span-2">
                <p>Sunrise</p>
                <div className=" text-2xl ">
                  {clima.forecast.forecastday[0].astro.sunrise}
                </div>
              </div>
            </div>
          </div>

          {/* mini cards-2 */}
          <div className=" flex flex-col gap-16   ">
            <div className="p-4 bg-slate-200 rounded-2xl grid grid-cols-3  ">
              <img
                className=" w-25 h-14 self-center"
                src="/src/assets/icons/droplet-cog.svg"
                alt="cloud-icon"
              />{" "}
              <div className="grid col-span-2">
                <p>Humidity</p>
                <div className=" text-2xl ">
                  <div className=" text-2xl ">{clima.current.humidity}%</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-200 rounded-2xl grid grid-cols-3  ">
              <img
                className=" w-25 h-14 self-center"
                src="/src/assets/icons/wind.svg"
                alt="cloud-icon"
              />{" "}
              <div className="grid col-span-2">
                <p>Visibility</p>
                <div className=" text-2xl ">
                  <div className=" text-2xl ">{clima.current.vis_km} m</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-200 rounded-2xl grid grid-cols-3  ">
              <img
                className=" w-25 h-14 self-center"
                src="/src/assets/icons/cloud-rain.svg"
                alt="cloud-icon"
              />{" "}
              <div className="grid col-span-2">
                <p>Chance of Rain</p>
                <div className=" text-2xl ">
                  {clima.forecast.forecastday[0].day.daily_chance_of_rain}%
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-200 rounded-2xl grid grid-cols-3  ">
              <img
                className=" w-25 h-14 self-center"
                src="/src/assets/icons/sunset.svg"
                alt="cloud-icon"
              />{" "}
              <div className="grid col-span-2">
                <p>Sunset</p>
                <div className=" text-2xl ">
                  {clima.forecast.forecastday[0].day.daily_chance_of_rain}%
                </div>
              </div>
            </div>
          </div>
          <div className="text-xl bg-slate-200 rounded-2xl p-4 flex flex-col gap-7 font-semibold ">
            {clima.forecast.forecastday[0].hour
              .filter((_, index) => index % 3 === 0) // cada 3 horas
              .slice(3, 25)
              .map((h, i) => (
                <div key={i} className="flex flex-col p-2">
                  <p className="mb-2 text-gray-700 text-base">
                    {(() => {
                      return ownDateDay(h).text;
                    })()}
                  </p>
                  <div className="flex justify-between ">
                    <p>
                      {(() => {
                        const [hourStr] = h.time.split(" ")[1].split(":");
                        const hour = parseInt(hourStr);
                        const ampm = hour < 12 ? "AM" : "PM";
                        const hour12 = hour % 12 || 12;
                        return `${hour12}:00 ${ampm}`;
                      })()}
                    </p>{" "}
                    {/* Ej: "03:00" */}
                    <p>{h.condition.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};
