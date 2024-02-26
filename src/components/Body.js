import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
          {
            method: 'GET',
            headers: {
                'Origin': 'http://localhost:1234', // Replace with your app's origin
                'X-Requested-With': 'XMLHttpRequest',
            }
         
        }
      );

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const json = await response.json();
      console.log(json);

      setListOfRestaurants(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      console.log(typeof listOfRestaurants);
  } catch (error) {
      console.error("Error fetching data:", error);
  }
  };


  if(listOfRestaurants.length === 0)
  {
    return <h1>Loading...</h1>
  }

 

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
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
