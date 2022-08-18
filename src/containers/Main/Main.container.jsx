import React from "react";

import WeatherApi from "../WeatherAPI/WeatherApi.container";
import RandomQuote from "../RandomQuote/RandomQuote.component";

const Main = () => {
  return (
    <div className="main w-full px-10 md:px-20 py-10">
      <div className="flex">
        <WeatherApi />
        <RandomQuote />
      </div>
    </div>
  );
};

export default Main;
