import React from 'react'
import { LOGO_URL } from '../utils/constants'
import useOnlineStatus from '../utils/useOnlineStatus'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () =>{

    const [btnName,setbtnName] = useState("login")

    const onlineStatus = useOnlineStatus();

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
                <li className="px-4">Cart</li>  
                <button onClick={()=>{
                    btnName==="login"? setbtnName("logout"): setbtnName("login")
                }} className="login">{btnName}</button>
            </ul>
        </div>
    </div>)
}

export default Header