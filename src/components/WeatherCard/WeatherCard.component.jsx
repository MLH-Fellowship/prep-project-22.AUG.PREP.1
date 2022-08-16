import React from "react";
import droplet from '../../assets/images/droplet.png';
import windspeed from '../../assets/images/windspeed.png'

export default function WeatherCard({ report }) {

    const temp = (report.temp.day - 273.15).toFixed(1)
    const weatherType = report.weather[0].main
    const time = new Date(report.dt * 1000).toLocaleDateString("en-UK")
    console.log(report);
    const url1 = "https://source.unsplash.com/random/?kolkata"

    return (
        <div className="bg-cyan-100/60 w-full h-64 border-2 border-black rounded-[10px] mr-5 text-base flex flex-col justify-center items-center">
            <div className="flex">
                <img src={`https://openweathermap.org/img/wn/${report.weather[0].icon}.png`} alt={weatherType} className='h-14 m-0' />
                <h1 className="text-[20px] mg-0 pt-5 pl-2">{weatherType}</h1>
            </div>
            <h1 className="text-2xl mg-0 p-0">{temp}°C</h1>
            <div className="w-30 max-w-full h-30">
                <div className="flex pt-5 items-center">
                    <img src={droplet} alt='humidity' className="h-8" />
                    <p className="text-xl pl-5">{report.humidity}% </p>
                </div>
                <div className="flex pt-5 items-center">
                    <img src={windspeed} alt='humidity' className="h-8" />
                    <p className="text-xl pl-5">{report.wind_speed}</p>
                </div>
            </div>
            <div className="w-full bg-gray-100 h-14 mt-3 rounded-b-lg">
                <p className="text-xl pt-2">{time}</p>
            </div>
        </div>
    )
}

