import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "./Map.component.jsx";
import "./Traffic.css";

const render = (status) => {
  return <h1>{status}</h1>;
};

const Traffic = ({ zoom, center, apiKey }) => {
  return (
    <div className="TrafficAPI w-full bg-gray-300 mt-10 rounded-[10px] h-80 text-center p-20">
      <Wrapper apiKey={apiKey} render={render}>
        <Map center={center} zoom={zoom}></Map>
      </Wrapper>
    </div>
  );
};

export default Traffic;
