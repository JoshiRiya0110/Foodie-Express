import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);

  // let listOfRestaurantsJS = [
  //   {
  //     info: {
  //       id: "10575",
  //       name: "Pizza Hut",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "Shanti Nagar",
  //       areaName: "Shanti Nagar",
  //       costForTwo: "₹600 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.1,
  //       parentId: "721",
  //       avgRatingString: "4.1",
  //       totalRatingsString: "5K+",
  //       sla: {
  //         deliveryTime: 26,
  //         lastMileTravel: 1.6,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "1.6 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "22037",
  //       name: "Wow! Momo",
  //       cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
  //       locality: "Brigade Road",
  //       areaName: "Brigade Road",
  //       costForTwo: "₹250 for two",
  //       cuisines: [
  //         "Tibetan",
  //         "Healthy Food",
  //         "Asian",
  //         "Chinese",
  //         "Snacks",
  //         "Continental",
  //         "Desserts",
  //         "Beverages",
  //       ],
  //       avgRating: 4.3,
  //       parentId: "1776",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "5K+",
  //       sla: {
  //         deliveryTime: 34,
  //         lastMileTravel: 3.6,
  //         serviceability: "SERVICEABLE",
  //         slaString: "30-35 mins",
  //         lastMileTravelString: "3.6 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
