import React, { useState,useEffect } from 'react'
import Shimmer from './Shimmer';
import {MENU_API} from '../utils/constants'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {

    // const [resInfo,setResInfo] = useState(null);
    const [showIndex,setShowIndex] = useState(null)
    const { resId } = useParams();
    // //console.log(resId);
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    const resInfo = useRestaurantMenu(resId);
    

    // const fetchMenu = async () =>{
    //     //console.log(MENU_API+{resId})
    //     const data = await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     //console.log(json.data);
    //     setResInfo(json.data);
    // }

    //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=23678&catalog_qa=undefined&submitAction=ENTER

    if(resInfo === null) return <Shimmer/>;
    

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
  return  ( 
    <div className="text-center">
        <h1 className="font-bold my-10 text-2xl">{name}</h1>
        <p className='font-bold'>{cuisines?.join(", ")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        {
          categories.map((category,index)=><RestaurantCategory 
          key={category?.card?.card?.title} 
          data={category?.card?.card}
          showItems={index===showIndex}
          setShowIndex={()=>setShowIndex(index)}
          />)
          
        }
        {/* <ul>
            {itemCards?.map((item)=>(
            <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {" Rs."} {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
            ))}
        </ul> */}
    </div>
  );
}

export default RestaurantMenu