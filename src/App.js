import React,{useState, useEffect} from "react";
import { Outlet } from "react-router";
import { CartContext } from "./utility/cartContext";
import HeaderTop from "./views/HeaderTop";
import FooterBottom from "./views/FooterBottom";
export default function App(){
    const [cartItem, setCartItems] = useState([]);
    const [pData, setPdata] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((data)=>data.json())
        .then((res)=>{
            setPdata(res.products);
        }
        );
    },[]);

    return  <>
                <CartContext.Provider value={{cartItem, setCartItems, pData}}>
                    <HeaderTop/>
                    <Outlet/>
                    <FooterBottom/>
                </CartContext.Provider> 
            </>        
}