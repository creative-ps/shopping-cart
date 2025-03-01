import React,{useState, useEffect} from "react";
import { Outlet } from "react-router";
import { CartContext } from "./utility/cartContext";
import HeaderTop from "./views/HeaderTop";
import FooterBottom from "./views/FooterBottom";
export default function App(){
    const [cartItem, setCartItems] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((data)=>data.json())
        .then((res)=>{
            setCartItems(res.products);
        }
        );
    },[]);

    return  <>
                <CartContext.Provider value={{cartItem, setCartItems}}>
                    <HeaderTop/>
                    <Outlet/>
                    <FooterBottom/>
                </CartContext.Provider> 
            </>        
}