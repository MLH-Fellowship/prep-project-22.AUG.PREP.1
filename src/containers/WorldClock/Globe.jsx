import React, { useState, useEffect } from 'react';
import ReactGlobe from 'react-globe';
import countriesJson from './CountryPoints/countries.json';
import colorsJson from "./CountryPoints/colours.json";

const countryInfoURL = "https://restcountries.com/v3.1/alpha/"

const options = {
  cameraRotateSpeed: 1.8,
  focusAnimationDuration: 2000,
  focusEasingFunction: ['Linear', 'None'],
  pointLightColor: 'black',
  pointLightIntensity: 1.5,
  globeGlowColor: 'darkblue',
  markerTooltipRenderer: marker => `${marker.country}`,
};

export default function MyGlobe () {

  const countries = JSON.parse(JSON.stringify(countriesJson));
  const colors = JSON.parse(JSON.stringify(colorsJson));
  const defaultMarkers = countries.map((marker,i)=>({
    id:i,
    ...marker,
    coordinates: [marker.latitude,marker.longitude],
    value: marker.numeric,
    color: colors[i%69]["hex"],
  }))

  const [countryDetails, setCountry] = useState(null);
  function onClickMarker(marker) {
    fetch(`${countryInfoURL}${marker.code}`)
    .then((res)=>res.json())
    .then((info)=>{
      const capital = (info[0].capital === undefined || info[0].capital.length === 0) ? "" : info[0].capital[0];
      console.log(info[0])
      setCountry({
        country: marker.country,
        capital: capital,
        flag: info[0].flags.svg,
        continent: info[0].continents[0],
        timeZone: info[0].timezones[0],
        currency: info[0].currencies[Object.keys(info[0].currencies)[0]]
      });
    })
  }

  const Helper = () =>{
    return (<div className=''>
      <p>{countryDetails.country}'s capital is {countryDetails.capital} and it's currency is {countryDetails.currency["name"]} ({countryDetails.currency["symbol"]})</p> 
      <img src={countryDetails.flag} alt="Country flag" style={{ width: "20px" }} />
      <p>{countryDetails.timeZone} is the timezone</p>
    </div>)
  }

  return (
    <div style={{margin : "0px 20px"}}>
      <ReactGlobe
        height="70vh"
        markers={defaultMarkers}
        options={options}
        width="100%"
        onClickMarker={onClickMarker}
      />
      {countryDetails &&
      <Helper />
      }
    </div>

)}
