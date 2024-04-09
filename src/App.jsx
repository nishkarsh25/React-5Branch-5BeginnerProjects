import React, { useState } from "react";
import coldBg from "./assets/cold-bg.jpg";
import warmBg from "./assets/warm-bg.jpg";


const api = {
  key: "a52e689a44c99bdb44350cf002da7b76",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    const date = d.toLocaleDateString("en-US", options);
    return date;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${typeof weather.main !== "undefined" &&
          weather.main.temp > 16
            ? warmBg
            : coldBg})`,
      }}
    >
      <div className={`${typeof weather.main !== "undefined" && weather.main.temp > 16 ? "bg-gradient-to-br from-red-400 to-orange-500" : "bg-gradient-to-br from-green-400 to-cyan-500"} p-8 rounded-lg shadow-lg`}>
        <div className="search-box mb-4">
          <input
            type="text"
            className="w-full py-2 px-4 rounded-lg bg-gray-100 focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>

        {typeof weather.main !== "undefined" && (
          <div className="text-center">
            <div className="text-3xl font-semibold text-gray-800 mb-2">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="text-lg text-gray-600 italic mb-4">
              {dateBuilder(new Date())}
            </div>
            <div className={`${typeof weather.main !== "undefined" && weather.main.temp > 16 ? "bg-gradient-to-br from-red-400 to-blue-500" : "bg-gradient-to-br from-pink-400 to-cyan-500"} p-6 rounded-lg shadow-md mb-4`}>
              <div className="text-6xl font-bold text-white mb-2">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="text-2xl font-semibold text-white mb-2">
                {weather.weather[0].main}
              </div>
              <div className="flex justify-between text-lg text-white">
                <div>
                  Feels like: {Math.round(weather.main.feels_like)}°C
                </div>
                <div>Humidity: {Math.round(weather.main.humidity)}%</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
