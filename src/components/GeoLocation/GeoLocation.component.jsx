import React, { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard.component";
import { Swiper, SwiperSlide } from "swiper/react";
import Lottie from 'react-lottie';
import animationData2 from '../../assets/images/loading2.json';
import "swiper/css";

export default function GeoLocation({ lat, long }) {
  const API_KEY = process.env.REACT_APP_APIKEY;
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setResults(data)
        setLoading(false)
      });

  }, [API_KEY, lat, long]);

  useEffect(() => {
    setLoading(true)
    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=2&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setCity(data[0].name)
        setLoading(false)
      });

  }, [API_KEY, lat, long]);

  return (
    <>
      {loading ? <div className="text-center"><Lottie options={defaultOptions} height={200} width={200} /></div> :
        <Swiper
          spaceBetween={10}
          slidesPerView={5}>
          {results && (
            results.daily.map((report, i) => {
              return (
                <div>
                  <SwiperSlide key={i}>
                    <WeatherCard report={report} />
                  </SwiperSlide>
                </div>
              );
            }))}
        </Swiper>}
    </>
  );
}
