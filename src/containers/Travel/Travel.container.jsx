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

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (Location.country) {
      getTripsIdx();
    }
  }, [Location.country]);

  useEffect(() => {
    if (TripsIdx.length > 0) {
      getTripDetails(TripsIdx);
    }
  }, [TripsIdx.length]);

  const getLocation = async () => {
    const res = await axios.get("http://ip-api.com/json/");
    SetLocation({
      country: res.data.country,
      lat: res.data.lat,
      lon: res.data.lon,
    });
  };

  const getTripsIdx = async () => {
    const BASE_URL = "https://api.opentripmap.com/0.1/en/places/bbox";
    const res = await axios.get(BASE_URL, {
      params: {
        lon_min: Location.lon - 2,
        lon_max: Location.lon + 2,
        lat_min: Location.lat - 2,
        lat_max: Location.lat + 2,
        apikey: process.env.REACT_APP_TRAVEL_APIKEY,
      },
    });
    const trips_idx = res.data.features
      .filter((_, idx) => idx < 4)
      .map((trip) => trip.properties.xid);
    SetTripsIdx([...trips_idx]);
  };

  const getTripDetails = async (xIds) => {
    SetTrips([]);
    xIds.forEach(async (xid) => {
      const BASE_URL = `https://api.opentripmap.com/0.1/en/places/xid/${xid}`;
      const res = await axios.get(BASE_URL, {
        params: {
          apikey: process.env.REACT_APP_TRAVEL_APIKEY,
        },
      });
      const tripDetails = {
        id: res.data.xid,
        name: res.data.name,
        address: `${res.data.address.country}, ${res.data.address.state}`,
        image: res.data.preview.source,
        kind: res.data.kinds.split(",")[0],
        wikipedia_page: res.data.wikipedia,
        details: res.data.wikipedia_extracts.text,
      };
      SetTrips((prevState) => [...prevState, tripDetails]);
    });
  };

  if (Location.country) {
    return (
      <div className="flex flex-col justify-center items-center w-11/12 md:w-10/12 bg-gray-300 mt-10 mx-auto rounded-[10px] text-center p-5 md:p-20">
        <h1 className="text-xxl py-2 mb-5 font-semibold">
          While you are in {Location.country} you can visit great places like:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-6 justify-center content-center">
          {Trips.length > 0 ? (
            Trips.map((trip) => {
              return <Trip key={trip.id} trip={trip} />;
            })
          ) : (
            <div>Loading recommendations ...</div>
          )}
        </div>
      </div>
    );
  } else {
    return <div>Loading location ...</div>;
  }
};

export default Travel;
