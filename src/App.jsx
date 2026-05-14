import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { OverviewMain } from "./components/OverviewMAin";
import { getClima } from "./api/wheatherApi";
import { NextsDays } from "./components/NextDays";
function App() {
  const [clima, setClima] = useState();
  useEffect(() => {
    const fetchClima = async () => {
      const data = await getClima();
      setClima(data);
    };
    fetchClima();
  }, []);
  if (!clima)
    return (
      <div className="flex w-full h-screen items-end justify-center pb-20 bg-gray-50">
        <div className="loader "></div>
      </div>
    );
  return (
    <>
      <NavBar setClima={setClima} />
      <OverviewMain clima={clima} />
      <NextsDays clima={clima} />
    </>
  );
}

export default App;
