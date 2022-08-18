import React from "react";
import { useEffect } from "react";
import "./Traffic.css";

const Traffic = ({ zoom, center, apiKey }) => {
  const Microsoft = window.Microsoft;
  useEffect(() => {
    const map = new Microsoft.Maps.Map(document.querySelector('#traffic'), {
      center: new Microsoft.Maps.Location(center.lat, center.lng),
      credentials: apiKey,
      zoom
    });
    Microsoft.Maps.loadModule('Microsoft.Maps.Traffic', function () {
        const manager = new Microsoft.Maps.Traffic.TrafficManager(map);
        manager.show();
    });
  }, [Microsoft, apiKey, center, zoom]);

  return (
    <div className="TrafficAPI w-full bg-gray-300 mt-10 rounded-[10px] h-80 text-center p-20" id="traffic" >
    </div>
  );
};

export default Traffic;
