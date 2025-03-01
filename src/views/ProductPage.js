import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../utility/cartContext";
import { calculate_discount_price } from "../utility/calculate_discounted_price";
export default function ProductPage(){
    const {setProducts, products, setCart, cart} = useContext(CartContext);
    const {category, title} = useParams();
    const [numInput, setNumInput] = useState(0);
    let ele = products.find((element) => element.title == title);
    const handleAddToCart = (obj)=>{
        const objN = cart.find((eleN) => eleN.id == obj.id);
        let objNa = null;
            if(objN){
                objNa = Object.assign({},obj,objN);  
                setCart([
                    ...cart,
                    objNa
                ]);
                return;
            }
        
        setCart([
            ...cart,
            obj
        ]); 
    }
    const handleOnchange = (e) => {
        setNumInput(e.target.value);
    }
    return <>
    {JSON.stringify(objNa)}
                <div className="productPage container">  
                    <div className="row">      
                            <div className="col-sm-4">
                                <img src={ele.thumbnail} width={"300"} height={""} title={ele.title} alt={ele.title}/>
                                <div className="d-flex justify-content-between">

                                    <input type="number" 
                                    onChange={handleOnchange} 
                                    className="ps-2" 
                                    min={0} 
                                    max={20} 
                                    step={1} 
                                    value={numInput}/>

                                    <button 
                                    type="button" 
                                    disabled={(numInput == 0) ? true : false}
                                    onClick={() => {
                                        handleAddToCart(
                                            {
                                                id:ele.id,
                                                pic:ele.thumbnail,
                                                name:ele.title,
                                                price:ele.price,
                                                brand:ele.brand,
                                                numItms:numInput
                                            }
                                        )
                                    }}
                                    className="rounded-0 btn btn-warning">
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                            <div className="col-sm-8">
                                <h3>{ele.title}</h3>
                                <p>{ele.description}</p>
                                <h6 className="mb-2">Brand : {ele.brand}</h6>
                                <p className="h3 ps-0">${calculate_discount_price(ele.price, ele.discountPercentage)} <span className="h3 text-secondary text-decoration-line-through ps-2"> {ele.price}</span></p>
                                <p className="mb-1">{ele.warrantyInformation}</p>
                                <p className="mb-1">{ele.shippingInformation}</p>
                                <p className="mt-2 h5 text-success">{ele.availabilityStatus}</p>
                                <p className="">{ele.returnPolicy}</p>

                                <div className="rating_stars">
                                    <span className="rating_stars_overlay d-inline-block"></span>
                                    <div className="d-inline-block text-dark">{ele.reviews.length} reviews.</div>
                                </div>

                                <div className="reviewer mt-5">
                                    <p className="h5 pb-1">Clients Reviews.</p>
                                    {
                                        ele.reviews.map(element => 
                                            <>
                                              <div className="p-3">
                                                <div className="p-1">Name: {element.reviewerName}</div>   
                                                <div className="p-1">Email: {element.reviewerEmail}</div> 
                                                <div className="p-1">
                                                <div className="rating_stars">
                                                    <span className="rating_stars_overlay d-inline-block"></span>
                                                    <div className="d-inline-block text-dark">{ele.reviews.length} reviews.</div>
                                                </div>
                                                     {element.rating}
                                                </div>  
                                                <div className="p-1">Comment: {element.comment}</div>   
                                                <div className="p-1">Date: {element.date}</div>   
                                              </div>  
                                            </>  
                                        )
                                    }
                                </div>    
                            </div>
                    </div>
                </div>
           </>;
}