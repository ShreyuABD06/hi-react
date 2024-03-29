import React from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState,useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () =>{

    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const [searchText,setSearchText] = useState("")
    const [filteredRestaurant,setFilteredRestaurant] = useState([])
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
        return listOfRestaurants.length ==0 ? <Shimmer/> :  (<div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/><button className="search-btn" onClick={()=>{
                    const filteredRestaurants =listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurants);
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurants.filter(res=>res.info.avgRating>4.4);
                setListOfRestaurants(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">   
        {
            filteredRestaurant.map((restaurant)=>(
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>
            ))
        }
        </div>
    </div>)
    
    
}

export default Body