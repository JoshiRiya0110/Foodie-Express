import {CDN_URL} from "../utils/constants.js"

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRatingString, cuisines, costForTwo, areaName } =
    resData.info;
//   const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
