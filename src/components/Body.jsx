import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body=()=>{

    const[listOfRestaurants, setListOfRestaurants] = useState([]);
    const[inputSearch, SetInputSearch] = useState("");
    

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.49870&lng=77.66690&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

       // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

       //  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name);
    }

    if(!listOfRestaurants)
        return null;

    return (listOfRestaurants.length==0)? <h2>loading</h2>
    : (
        <div className="body">
            <div className="search">
                <input 
                className="search-input" 
                onChange={(e)=>{
                    SetInputSearch(e.target.value);
                }}
                value={inputSearch}
                />
                <button
                onClick={()=>{
                    console.log(inputSearch);
                    const filteredRestaurants = listOfRestaurants.filter((res)=>{
                        return res.info.name.includes(inputSearch);
                    });
                    setListOfRestaurants(filteredRestaurants);
                }}                
                >Search                    
                </button>
            </div>
            <button
                className="filter-btn"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=>res.rating>4
                    );
                    setListOfRestaurants(filteredList);
                }}
            >Top rated restaurants</button>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>{
                    let res = restaurant.info;
                    // console.log(res);
                    return(
                    <RestaurantCard key={res.id} resData={res}/>
                )})}
            </div>
        </div>
    )
}

export default Body;