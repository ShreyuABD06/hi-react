import React, { useState,useEffect } from 'react'
import Shimmer from './Shimmer';
import {MENU_API} from '../utils/constants'
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    useEffect(()=>{
        fetchMenu();
    },[]);

    

    const fetchMenu = async () =>{
        console.log(MENU_API+{resId})
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }

    //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=23678&catalog_qa=undefined&submitAction=ENTER

    if(resInfo === null) return <Shimmer/>;
    

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
    console.log(itemCards);
  return  ( 
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            {itemCards?.map((item)=>(
            <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {" Rs."} {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
            ))}
        </ul>
    </div>
  );
}

export default RestaurantMenu