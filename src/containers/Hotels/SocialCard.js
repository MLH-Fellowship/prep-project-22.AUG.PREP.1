import hotelImg from '../../assets/images/hotel.jpg'
import './SocialCard'
const SocialCard=({hoteldata}) =>{
  return(
    <div className="card" >
       <div className="card_image"><img src={hotelImg}/></div>
       <div className="card_title">{hoteldata.name}</div>
       <div className="card_body">
          <b>Address :</b> {hoteldata.address.streetAddress},
          {hoteldata.address.extendedAddress},{hoteldata.address.postalCode}
       </div>
    </div>
  );


};

export default SocialCard;
