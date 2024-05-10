import React from 'react'
import { LOGO_URL } from '../utils/constants'
import useOnlineStatus from '../utils/useOnlineStatus'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'


const Header = () =>{

    const [btnName,setbtnName] = useState("login")    

    //Subscribing to the store with Selector
    const cartItems = useSelector((store)=>store.cart.items)

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (<div className="flex justify-between bg-green-50 shadow-lg">
        <div className="logo-container">
            <img className="w-40"  src={LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status : {onlineStatus? "✅": "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>  
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4 font-bold">Cart - {cartItems.length}</li>  
                <button onClick={()=>{
                    btnName==="login"? setbtnName("logout"): setbtnName("login")
                }} className="login">{btnName}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>)
}

export default Header