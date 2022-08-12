import React, { useEffect, useState } from "react";
import GeoLocation from "../../components/GeoLocation/GeoLocation.component";

const WeatherApi = () => {
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    }, [])


    return (
        <div className="WeatherApi w-3/4 h-21 bg-gray-600 rounded-[10px] text-center p-8 mr-5">
            {(latitude & longitude) && <GeoLocation lat={latitude} long={longitude} />}
        </div>
    )
}




export default WeatherApi;