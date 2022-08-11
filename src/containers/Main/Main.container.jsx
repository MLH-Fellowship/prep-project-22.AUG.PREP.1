import React from "react";

import WeatherApi from "../WeatherAPI/WeatherApi.component";
import RandomQuote from "../RandomQuote/RandomQuote.component";
import Hotels from "../Hotels/Hotels.component";
import Music from "../Music/Music.container";

const Main = () => {
  return (
    <div className="main w-full px-10 md:px-20 py-10">
      <div className="flex">
        <WeatherApi />
        <RandomQuote />
      </div>
      <Hotels />
      <Music country={"united Kingdom"} />
    </div>
  );
};

export default Main;
