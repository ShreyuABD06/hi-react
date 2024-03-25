import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { useState } from 'react'

const Header = () =>{

    const [btnName,setbtnName] = useState("login")

    return (<div className="header">
        <div className="logo-container">
            <img className="logo"  src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>  
                <li>Cart</li>  
                <button onClick={()=>{
                    btnName==="login"? setbtnName("logout"): setbtnName("login")
                }} className="login">{btnName}</button>
            </ul>
        </div>
    </div>)
}

export default Header