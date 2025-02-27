import React,{useState,useEffect,useContext} from "react";
import Card from "./views/Product";
import {CartContext} from "./utility/cartContext";
import { Link } from "react-router";

export default function AllData(){
    const {cartItem, setCartItems, pData} = useContext(CartContext);

    const handleAddToCart = (obj)=>{
        setCartItems([
            ...cartItem,
            obj
        ]); 
    }
    
    return pData.map((itm) => {
                                const category = itm.category;
                                const title = itm.title;
                                return <div className="col-3 pb-4" key={itm.title}>
                                            <Link className="prod_view" to={category+'/'+title}>
                                                <Card
                                                src={itm.thumbnail}
                                                title={itm.title}
                                                price={itm.price}
                                                description={itm.description}
                                                onClick={()=>{handleAddToCart(
                                                    {
                                                        id:itm.id,
                                                        pic:itm.thumbnail,
                                                        name:itm.title,
                                                        price:itm.price,
                                                        brand:itm.brand
                                                    }
                                                )}}
                                                /> 
                                            </Link>
                                      </div>
                              } 
                    )
}