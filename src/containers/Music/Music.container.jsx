import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Song from "./Song";

const Music = () => {
  const [Location, SetLocation] = useState({
    country: null,
    lat: null,
    lon: null,
  });
  const [Songs, SetSongs] = useState([]);
  const [allSongs, SetAllSongs] = useState([]);
  const [Erorr, SetErorr] = useState(null);

  useEffect(() => {
    axios.get("http://ip-api.com/json/").then(res =>{
      SetLocation({
        country: res.data.country,
        lat: res.data.lat,
        lon: res.data.lon,
      });
    })
  }, []);

  useEffect(() => {
    if (Location.country) {
      axios.get("https://ws.audioscrobbler.com/2.0/", {
        params: {
          method: "geo.gettoptracks",
          format: "json",
          limit: "6",
          api_key: process.env.REACT_APP_MUSIC_APIKEY,
          country: Location.country,
        },
      }).then(res => {
        if (res.data.error) {
          SetErorr({ ...res.data });
        } else {
          SetSongs([...res.data.tracks.track]);
        }
      })
    };
  }, [Location]);

  useEffect(() => {
      axios.get("https://ws.audioscrobbler.com/2.0/", {
        params: {
          method: "chart.gettoptracks",
          format: "json",
          limit: "18",
          api_key: process.env.REACT_APP_MUSIC_APIKEY,
        },
      }).then(res => {
        SetAllSongs([...res.data.tracks.track]);
      })
  }, []);

  return (
    <>
      <div className="songs flex flex-col justify-center items-center p-5 w-11/12 md:w-10/12 mt-10 mx-auto rounded-[10px]">
        {Erorr ? (
          <h1 className="text-l py-2 text-red-700">
            Country name is invalid, Country name is not as defined by the ISO
            3166-1 country names standard
          </h1>
        ) : Songs.length === 0 ? (
          <h1 className="text-xl py-2 font-semibold">Loading songs ... </h1>
        ) : (
          <>
            <h1 className="text-xl py-2 font-semibold">
              In {Location.country} you can listen to ...
            </h1>
            <div className="songs-list flex flex-wrap justify-center items-center">
              {Songs.map((song) => {
                return <Song key={song.mbid} song={song} />;
              })}
            </div>
          </>
        )}
      </div>
      <div className="songs flex flex-col justify-center items-center p-5 w-11/12 md:w-10/12 mt-10 mx-auto rounded-[10px]">
        {allSongs.length === 0 ? (
          <h1 className="text-xl py-2 font-semibold">Loading songs ... </h1>
        ) : (
          <>
            <h1 className="text-xl py-2 font-semibold">
              These are global Top track songs
            </h1>
            <div className="songs-list flex flex-wrap justify-center items-center">
              {allSongs.map((song) => {
                return <Song key={song.mbid} song={song} />;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Music;
