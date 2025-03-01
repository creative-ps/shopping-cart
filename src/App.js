import React,{useState, useEffect} from "react";
import { Outlet } from "react-router";
import { CartContext } from "./utility/cartContext";
import HeaderTop from "./views/HeaderTop";
import FooterBottom from "./views/FooterBottom";
export default function App(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((data)=>data.json())
        .then((res)=>{
            setProducts(res.products);
        }
        );
    },[]);

    return  <>
                <CartContext.Provider value={{products, setProducts, cart, setCart}}>
                    <HeaderTop/>
                    <Outlet/>
                    <FooterBottom/>
                </CartContext.Provider> 
            </>        
}