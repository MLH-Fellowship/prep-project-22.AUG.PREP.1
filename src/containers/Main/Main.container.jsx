import React from "react";

import WeatherApi from "../WeatherAPI/WeatherApi.component";
import RandomQuote from "../RandomQuote/RandomQuote.component";
import Hotels from "../Hotels/Hotels.component";
import Music from "../Music/Music.component";

const Main = () => {
  return (
    <div className="main w-full px-20 py-10">
      <div className="flex">
        <WeatherApi />
        <RandomQuote />
      </div>
      <Hotels />
    </div>
  );
};

export default Main;
