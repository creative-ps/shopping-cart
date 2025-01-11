import React,{useState,useEffect,useContext} from "react";
import Card from "./views/Product";
import {CartContext} from "./utility/cartContext";
import { Link } from "react-router";

export default function AllData({url}){
    const {cartItem, setCartItems} = useContext(CartContext);
    const [prd,setPrd] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            console.info(data.products);
            setPrd(data.products);
        });
    },[]);  

    const handleAddToCart = (obj)=>{
        setCartItems([
            ...cartItem,
            obj
        ]); 
    }
    
    return prd.map((itm) =>  <div className="col-3 pb-4" key={itm.title}>
                                <Link className="prod_view" to="">
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
                             )
}