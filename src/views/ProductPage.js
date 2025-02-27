import React, { useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../utility/cartContext";
export default function ProductPage(){
    const {pData} = useContext(CartContext);
    const {category, title} = useParams();
    let ele = pData.find((element) => element.title == title);
    return <>
                <div className="productPage container">
                    
                    <div className="row">
                        
                            <div className="col-sm-4">
                                <img src={ele.thumbnail} width={"300"} height={""} title={ele.title} alt={ele.title}/>
                            </div>

                            <div className="col-sm-8">
                                <h3>{ele.title}</h3>
                                <h5>{ele.description}</h5>
                                <h4>Brand : {ele.brand}</h4>
                            </div>
                        
                    </div>
                </div>
           </>;
}