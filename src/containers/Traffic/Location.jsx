import React, { useEffect, useState } from "react";
import Traffic from "./Traffic.component";

const TrafficLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const Loader = () =>{
    if(latitude !== null && longitude !== null ){
      const location = {
        lat: latitude,
        lng: longitude
      }
      return <Traffic zoom={15} center={location} apiKey={process.env.TRAFFIC_API_KEY}/>;
    }
    return <>Latitude and Longitude are not received</>
  }
  return (
    <div>
      <Loader />
    </div>
  );
};

export default TrafficLocation;

