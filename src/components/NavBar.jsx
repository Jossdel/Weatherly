import { getClima, searchLocations } from "../api/wheatherApi";
import { useState } from "react";

export const NavBar = ({ setClima }) => {
  const [location, setLocation] = useState("");

  const handleSearch = async () => {
    if (location.trim() === "") return;

    const locationFormatted = location.replace(/\b\w/g, (letra) =>
      letra.toUpperCase(),
    );
    setLocation(locationFormatted);
    const results = await searchLocations(locationFormatted);
    if (results.length === 0) return;
    const city = results[0].name;
    const data = await getClima(city);
    setClima(data);
  };

  return (
    <nav className=" w-full h-16  mt-3 flex items-center justify-around px-4">
      <div className="max-w-60 bg-gray-100 p-2.5 rounded-lg flex gap-1 items-center">
        <img className="  w-7 h-7" src="cloud-fill.svg" alt="cloud-icon" />
        <h1 className="text-xl font-semibold ">Weatherly</h1>
      </div>
      <button className="w-2/4  bg-gray-100 flex gap-1 items-center p-2 rounded-md ">
        <img
          className="w-8 h-full cursor-pointer"
          src="search.svg"
          alt="Search Icon"
          onClick={handleSearch}
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search location..."
          className=" text-black text-lg placeholder:text-gray-500 border-0  p-1 flex-1 ring-0 focus:ring-0 focus:outline-none bg-transparent"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </button>
    </nav>
  );
};
