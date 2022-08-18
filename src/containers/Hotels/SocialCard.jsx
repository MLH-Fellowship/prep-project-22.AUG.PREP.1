import "./SocialCard";
const SocialCard = ({ hotelData }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={hotelData.optimizedThumbUrls.srpDesktop} />
      </div>
      <div className="card_title">{hotelData.name}</div>
      <div className="card_body">
        <b>Address :</b> {hotelData.address.streetAddress},
        {hotelData.address.extendedAddress},{hotelData.address.postalCode}
      </div>
      <div>
        <b>Distance :</b>
        {hotelData.landmarks[0].distance} from your nearest landmark i.e.{" "}
        {hotelData.landmarks[0].label}
      </div>
      <div>
        <b>Price :</b>Approx. ${hotelData.ratePlan.price.exactCurrent}
      </div>
      <div>
        <b>Rating :</b>
        {hotelData.starRating} stars
      </div>
    </div>
  );
};

export default SocialCard;
