import React,{useState} from "react";
import { Outlet, Link } from "react-router";
import { CartContext } from "./utility/cartContext";
import HeaderTop from "./views/HeaderTop";
import FooterBottom from "./views/FooterBottom";
export default function App(){
    const [cartItem, setCartItems] = useState([]);
    return  <>
                <CartContext.Provider value={{cartItem, setCartItems}}>
                    <HeaderTop/>
                    <Outlet/>
                    <FooterBottom/>
                </CartContext.Provider> 
            </>        
}