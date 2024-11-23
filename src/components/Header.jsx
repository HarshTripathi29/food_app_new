import { useState } from "react";
import "../App.css";

export const Header=()=>{
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
            <h1>Swiggy</h1>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home </li>
                <li>About </li>
                <li>Cart</li>
                <li>Contact</li>
            </ul>
            <button 
            className="login_btn"
            onClick={()=>{
                setBtnName("Logout")
            }}>
                {btnName}
            </button>
            </div>
        </div>
)
}

// just giving html inside the function wont give anything 
// return the html/js from the function.