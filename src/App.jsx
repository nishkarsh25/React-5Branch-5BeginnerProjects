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

  return (
    <div>
      
    </div>
  )
}

export default App
