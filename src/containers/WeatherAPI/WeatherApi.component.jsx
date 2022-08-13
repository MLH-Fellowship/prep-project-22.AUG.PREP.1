import React, { useEffect, useState } from "react";
import WeatherReport from "./WeatherReport.component";

const WeatherApi = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <div className="WeatherApi w-3/4 h-21 bg-gray-300 rounded-[10px] text-center p-8 mr-5">
      <h2>Weather API Section</h2>
      {latitude & longitude && (
        <WeatherReport lat={latitude} long={longitude} />
      )}
    </div>
  );
};

export default WeatherApi;
