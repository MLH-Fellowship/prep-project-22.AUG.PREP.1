import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Trip from "./Trip";

const Travel = () => {
  const [Location, SetLocation] = useState({
    country: null,
    lat: null,
    lon: null,
  });
  const [TripsIdx, SetTripsIdx] = useState([]);
  const [Trips, SetTrips] = useState([]);
  const [Erorr, SetErorr] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (Location.country) {
      getTrips();
    }
  }, [Location.country]);

  const getTrips = async () => {
    const BASE_URL = "https://api.opentripmap.com/0.1/en/places/bbox";
    const res = await axios.get(BASE_URL, {
      params: {
        lon_min: Location.lon - 2.5,
        lon_max: Location.lon + 2.5,
        lat_min: Location.lat - 2.5,
        lat_max: Location.lat + 2.5,
        apikey: process.env.REACT_APP_TRAVEL_APIKEY,
      },
    });
    const trips_idx = res.data.features
      .filter((_, idx) => idx < 4)
      .map((trip) => trip.properties.xid);
    console.log(trips_idx);
    SetTripsIdx([...trips_idx]);
  };

  const getLocation = async () => {
    const res = await axios.get("http://ip-api.com/json/");
    SetLocation({
      country: res.data.country,
      lat: res.data.lat,
      lon: res.data.lon,
    });
  };

  if (Location.country) {
    return (
      <div>
        {Location.country}
        {Location.lat}
        {Location.lon}
        {TripsIdx.map((id) => {
          return <div key={id}>{id}</div>;
        })}
      </div>
    );
  } else {
    return <div>Loading location</div>;
  }
};

export default Travel;
