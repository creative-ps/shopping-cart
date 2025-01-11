import React,{useEffect,useState} from "react";
import Card from "./views/Product";
import { useParams } from "react-router";
import { useContext } from "react";
import {CartContext} from "./utility/cartContext";

const SearchResult = ()=>{
    const {cartItem, setCartItems} = useContext(CartContext);
    const [fetchData, setFetchData] = useState([]);
    const {cate} = useParams();
    useEffect(()=>{
        let url = "https://dummyjson.com/products";
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setFetchData(data.products);
            // console.info(data.products);
            // console.info(cate);
        })
    },[]);

    const handleAddToCart = (id)=>{
        setCartItems([
            ...cartItem,
            id
        ]); 
    }
    
    if(cate === undefined){
        return <>{"..."}</>
    }
    let result =  fetchData.map((itm)=> 
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