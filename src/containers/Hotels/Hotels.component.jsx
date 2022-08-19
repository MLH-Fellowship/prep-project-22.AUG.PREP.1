import React, { useEffect, useState } from "react";
import "./SocialCard.css";
import SocialCard from "./SocialCard";
import Lottie from 'react-lottie';
import animationData2 from '../../assets/images/loading2.json';

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ceffe02ac7msh5919cb6185fcc79p1aff0fjsnb3beb2a713b2",
    "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
  },
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function Hotels({ lat, long }) {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    (async () => {
      const today = new Date();
      var date = today.toJSON().slice(0, 10);
      var nDate =
        date.slice(0, 4) + "-" + date.slice(5, 7) + "-" + date.slice(8, 10);
      let entities;
      try {
        const response = await fetch(
          `https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby?latitude=${lat}&currency=USD&longitude=${long}&checkout_date=${nDate}&sort_order=DISTANCE_FROM_LANDMARK&checkin_date=${nDate}&adults_number=1&locale=en_US`,
          options
        );
        const hoteldata = await response.json();
        entities = hoteldata.searchResults.results;
      } catch (error) {
        console.log(error);
      }
      setHotel(entities);
    })();
  }, [lat, long]);

  console.log(hotel)

  const Loader = () => {
    if (hotel.length === 0) return <div className="text-center"><Lottie options={defaultOptions} height={200} width={200} /></div>;
    return <></>;
  };

  return (
    <div className="flex justify-evenly flex-wrap">
      <Loader />
      {hotel.map((hotel, index) => (
        <SocialCard hotelData={hotel} key={index} />
      ))}
    </div>
  );
}

export default Hotels;
