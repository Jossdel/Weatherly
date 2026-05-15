import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { OverviewMain } from "./components/OverviewMAin";
import { getClima } from "./api/wheatherApi";
import { NextsDays } from "./components/NextDays";
import { Map } from "./components/Map";
import type { WeatherData } from "./types/weather";

function App() {
  const [clima, setClima] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchClima = async () => {
      const data = await getClima();
      setClima(data);
    };

    void fetchClima();
  }, []);

  if (!clima) {
    return (
      <div className="flex w-full h-screen items-end justify-center pb-20 bg-gray-50">
        <div className="loader "></div>
      </div>
    );
  }

  return (
    <div className="p-5 w-full h-screen">
      <NavBar setClima={setClima} />
      <OverviewMain clima={clima} />
      <NextsDays clima={clima} />
      <Map />
    </div>
  );
}

export default App;
