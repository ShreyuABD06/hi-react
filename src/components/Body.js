import React from 'react'
import RestaurantCard,{withPromotedLabel} from './RestaurantCard'
import resList from '../utils/mockData'
import { useState,useEffect, useContext } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext' 

const Body = () =>{

    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const [searchText,setSearchText] = useState("")
    const [filteredRestaurant,setFilteredRestaurant] = useState([])

    //Context Function

    const {setUserName, loggedInUser} = useContext(UserContext)

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

    console.log(listOfRestaurants)
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        
        return (<>
        <h1>Looks like you are not online! Please check your internet connection</h1>
        </>)
    }
    
        return listOfRestaurants?.length ==0 ? <Shimmer/> :  (<div className="body">
        <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" className="px-4 py-2 border border-solid border-black rounded-lg" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/><button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    const filteredRestaurants =listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurants);
                }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-50 rounded-lg hover:bg-slate-200" onClick={()=>{
                const filteredList = listOfRestaurants.filter(res=>res.info.avgRating>4.4);
                setFilteredRestaurant(filteredList);
            }}>Top Rated Restaurants</button>
            </div>    
            <div className="search m-4 p-4 flex items-center">
                <label>User Name : </label>
            <input className="px-4 py-2 m-2 border border-solid border-black rounded-lg" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
            </div>        
        </div>
        <div className="res-container flex flex-wrap">   
        {
            filteredRestaurant.map((restaurant)=>(
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                {
                    restaurant.info.avgRating>4.4 ? (<RestaurantCardPromoted resData={restaurant}/>) : 
                    (<RestaurantCard  resData={restaurant}/>)
                }
                
                </Link>
            ))
        }
        </div>
        
    </div>)
    
    
}

export default Body