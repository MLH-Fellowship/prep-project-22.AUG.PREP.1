import "./styles.css";
import { FaWikipediaW } from "react-icons/fa";

const Trip = ({ trip }) => {
  return (
    <div className="trip">
      <img className="trip-img" src={trip.image} alt="trip" />
      <div className="trip-info">
        <h1 className="p-2 my-1">{trip.name}</h1>
        <h6 className="p-2 my-1">#{trip.kind}</h6>
        <p className="p-2 my-1">{trip.address}</p>
      </div>
      <div className="overview">
        <p className="p-2 my-1">{trip.details}</p>
        <a
          className="flex items-cemter justify-center p-2 my-1"
          href={trip.wikipedia_page}
          target="_blank"
          rel="noreferrer"
        >
          <FaWikipediaW className="trip-logo" />
          wikipedia page
        </a>
      </div>
    </div>
  );
};

export default Trip;
