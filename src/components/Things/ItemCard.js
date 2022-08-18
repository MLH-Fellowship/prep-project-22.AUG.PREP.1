import React from 'react'
import Tilt from "react-tilt";
import "./Things.css";

const ItemCard = (props) => {

    return(
    <Tilt
      className="Tilt"
      options={{ max: 25 }}
      style={{ height: 300, width: 250 }}
    >
      <div className="card-things">
        <img src={props.image} alt="{props.name}" className="icon" />
        <h3 className="desc">
          Don't forget to bring your <br /> {props.name}!{" "}
        </h3>
      </div>
    </Tilt>
  );

}

export default ItemCard;