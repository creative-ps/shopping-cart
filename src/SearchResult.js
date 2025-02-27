import React,{useEffect,useState} from "react";
import Card from "./views/Product";
import { useParams } from "react-router";
import { useContext } from "react";
import {CartContext} from "./utility/cartContext";

const SearchResult = ()=>{
    const {cartItem, setCartItems, pData} = useContext(CartContext);
    const {cate} = useParams();

    const handleAddToCart = (id)=>{
        setCartItems([
            ...cartItem,
            id
        ]); 
    }
    
    if(cate === undefined){
        return <>{"..."}</>
    }
    let result =  pData.map((itm)=> 
                    {
                        if(itm.category === cate){
                            return(
                                    <div className="col-sm-3 pb-0">
                                        <Card 
                                        src={itm.thumbnail}
                                        title={itm.title}
                                        description={itm.description}
                                        price={itm.price}
                                        onClick={()=>{handleAddToCart(itm.id)}}
                                        />
                                    </div>
                            )
                        }
                    }
                );

    return (<div className="container">
                <div className="row">    
                    {result}
                </div>
            </div>);
    
}

export default SearchResult;