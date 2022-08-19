import "./SocialCard";
const SocialCard = ({ hotelData }) => {
  return (
    <div className="gradient w-[25vw] m-2 inline-block pb-4  text-white overflow-hidden rounded-xl shadow hover:shadow-md
    transition">
      <div className="max-h-64 overflow-hidden">
        <img className="w-full h-full object-cover transition group-hover:scale-125" src={hotelData.optimizedThumbUrls.srpDesktop} alt="hotels" />
      </div>
      <div className="text-center m-2 text-2xl font-bold">{hotelData.name}</div>
      <div className="p-4 font-light  ">
        <p className=""><b className="font-bold">Address </b> : {hotelData.address.streetAddress},
        {hotelData.address.extendedAddress},{hotelData.address.postalCode}</p>
      </div>
      <div className="p-4 font-light ">
        <p><b className="font-bold">Distance </b> :
        {hotelData.landmarks[0].distance} from your nearest landmark i.e.{" "}
        {hotelData.landmarks[0].label}</p>
      </div>
      <div className="p-4 font-light ">
        <p><b className="font-bold">Price </b> : Approx. ${hotelData.ratePlan.price.exactCurrent}</p>
      </div>
      <div className="p-4 font-light ">
        <p><b className="font-bold">Rating </b> :
        {hotelData.starRating} stars</p>
      </div>
    </div>
  );
};

export default SocialCard;
