import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "./Things.css";

const objectsArray = [
  {
    name: 'scarf', //0
    image:"https://media.giphy.com/media/OMu98QasaDLtHP9Tzq/giphy.gif"
  },
  {
    name: 'raincoat', //1
    image:"https://media.giphy.com/media/farkrofSw4niFab4m9/giphy.gif"
  },
  {
    name: 'boots', //2
    image: "https://media.giphy.com/media/etOfda3o1QevH3rpAU/giphy.gif"
  },
  {
    name: 'umbrella', //3
    image: "https://media.giphy.com/media/bzBqPGd9g0z7EsKV3s/giphy.gif"
  },
  {
    name: 'hat', //4
    image:"https://media.giphy.com/media/ffvJ4xfAniFoqHUQoO/giphy.gif"
  },
  {
    name:'coat', //5
    image:"https://media.giphy.com/media/nrIqlnAafRLsZlEdmF/giphy.gif"
  },
  {
    name:'sunglasses', //6
    image:"https://media.giphy.com/media/3ohzdWYbITsO2Y5rbi/giphy.gif"
  },
  {
    name: "torch", //7
    image:"https://media.giphy.com/media/iBpNHPhNiBifTFU88k/giphy.gif"
  },
  {
    name:"sunscreen", //8
    image:"https://media.giphy.com/media/8pyvAydrHFMNpMXWRF/giphy.gif"
  },
  {
    name:"Glasses", //9
    image:"https://media.giphy.com/media/ln7s8NuSiz5Z4aaDbs/giphy.gif"
  },
]

const Things = () => {
  const weather = localStorage.getItem("weather");
  const [Objects, setObjects] = useState([]);
  useEffect(() => {
    if (weather !== undefined) {
      if (weather === "Clear") {
        setObjects([
          objectsArray[4],
          objectsArray[8],
          objectsArray[6],
        ]);
      } else if (
        weather === "Rain" ||
        weather === "Thunderstorm" ||
        weather === "Drizzle" ||
        weather === "Tornado" ||
        weather === "Squall"
      ) {
        setObjects([
          objectsArray[1],
          objectsArray[3],
          objectsArray[2],
        ]);
      } else if (
        weather === "Mist" ||
        weather === "Smoke" ||
        weather === "Haze" ||
        weather === "Fog"
      ) {
        setObjects([objectsArray[7], objectsArray[5]]);
      } else if (weather === "Snow") {
        setObjects([objectsArray[5], objectsArray[0], objectsArray[2]]);
      } else if (weather === "Clouds") {
        setObjects([objectsArray[5], objectsArray[4]]);
      } else if (
        weather === "Ash" ||
        weather === "Dust" ||
        weather === "Sand"
      ) {
        setObjects([objectsArray[4], objectsArray[9]]);
      }
    }
  }, []);
  return (
    <>
        <div className="cards" style={{ alignItems: "center" }}>
          <h1 style={{ fontSize: "2.5rem", textAlign: "center", margin: "20px"}}>Don't forget to bring these things!</h1>
          {Objects &&
            Objects.map((object) => {
              let key = Object.keys(Objects).filter(function (key) {
                console.log(weather)
                return Objects[key] === object;
              });
              return (
                <div className="card-wrapper">
                  <ItemCard name= {object.name} image= {object.image} />{" "}
                </div>
              );
            })}
        </div>
    </>
  );
};

export default Things;