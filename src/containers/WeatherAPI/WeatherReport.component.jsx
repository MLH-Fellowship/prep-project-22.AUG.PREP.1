import React, { useEffect, useState } from "react";

export default function WeatherReport({ lat, long }) {
  const API_KEY = process.env.REACT_APP_APIKEY;
  const [results, setResults] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setResults(result);
      });
  }, [API_KEY, lat, long]);
  return (
    <>
      {results && (
        <>
          {results["name"]} is your city and{" "}
          {(results["main"].temp - 273.15).toFixed(1)}°C is the current
          temperature
        </>
      )}
    </>
  );
}
