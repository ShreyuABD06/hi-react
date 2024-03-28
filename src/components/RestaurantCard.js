import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cloudinaryImageId,avgRating,cuisines,costForTwo,sla} = resData?.info;
   return(
   <div className="m-4 p-4 w-[280px] bg-[#f0f0f0] rounded-lg hover:bg-gray-200">
        <img className="res-logo rounded-lg" src={CDN_URL+cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>        
    </div>
    )
}

export default RestaurantCard