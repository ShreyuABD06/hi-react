import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cloudinaryImageId,avgRating,cuisines,costForTwo,deliveryTime} = resData?.info;
   return(
   <div className="res-card">
        <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h3 className="">{resData.info.name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>        
    </div>
    )
}

export default RestaurantCard