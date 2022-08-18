import React, { useEffect, useState } from "react";
import HotelApi from "./Hotels.component";

const HotelsLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <div>
      {latitude && longitude && <HotelApi lat={latitude} long={longitude} />}
    </div>
  );
};

export default HotelsLocation;
