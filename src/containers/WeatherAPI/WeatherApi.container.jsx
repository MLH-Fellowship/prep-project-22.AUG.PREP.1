import React, { useEffect, useState } from "react";
import GeoLocation from "../../components/GeoLocation/GeoLocation.component";

const WeatherApi = ({cityName}) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const API_KEY = process.env.REACT_APP_APIKEY;
  const [city, setCity] = useState('');
  const [state, setState] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
      fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=2&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setCity(data[0].name)
        setState(data[0].state)
        console.log(data)
      
      });

  }, [API_KEY, latitude, longitude]);


  const city22 = `https://source.unsplash.com/random/?${state}`

  return (
    <>
      <div style={{ backgroundImage: `URL(${city22})` }} className="WeatherApi w-3/4 h-21 rounded-2xl p-8 mr-5">
        {latitude && longitude && <h1 className="text-black bg-slate-100 w-fit p-4 rounded-full m-4 font-light">Results for <b className="font-bold">{city}</b></h1>}
        {latitude && longitude && <GeoLocation lat={latitude} long={longitude} />}
      </div></>
  );
};

export default WeatherApi;
