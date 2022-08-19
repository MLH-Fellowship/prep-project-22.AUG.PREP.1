import React, { useEffect, useState } from "react";
import GeoLocation from "../../components/GeoLocation/GeoLocation.component";
import Lottie from 'react-lottie';
import animationData2 from '../../assets/images/loading2.json';

const WeatherApi = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const API_KEY = process.env.REACT_APP_APIKEY;
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
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    setLoading(true)
    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=2&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setCity(data[0].name)
        setLoading(false)
      });

  }, [API_KEY, latitude, longitude]);

  return (
    <div className="WeatherApi w-3/4 h-21 bg-gray-600 rounded-2xl p-8 mr-5">
      {loading ? <div className="text-center"><Lottie options={defaultOptions} height={200} width={200} /></div>  : null}
      {latitude && longitude && <h1 className="text-white m-4 font-light">Results for <b className="font-bold">{city}</b></h1>}
      {latitude && longitude && <GeoLocation lat={latitude} long={longitude} />}
    </div>
  );
};

export default WeatherApi;
