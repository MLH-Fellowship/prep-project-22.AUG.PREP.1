import React, { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard.component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function GeoLocation({ lat, long }) {
  const API_KEY = process.env.REACT_APP_APIKEY;
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setResults(data)
        setLoading(false)
      });
  }, [API_KEY, lat, long]);

  return (
    <>
      {loading && <div className="text-center">Loading...</div>}
      <Swiper
        spaceBetween={10}
        slidesPerView={5}>
        {results && (
          results.daily.map((report, i) => {
            return (
              <SwiperSlide key={i}>
                <WeatherCard report={report} />
              </SwiperSlide>
            );
          }))}
      </Swiper>
    </>
  );
}
