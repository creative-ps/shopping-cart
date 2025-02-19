import React from "react";
export default function Card({src,alt,title,description,price,onClick}){
    return <div className="card prdt_card rounded-0">
                <img src={src} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                {/* <h6 className="text-end">{price}</h6> */}
                {/* <a href="#" onClick={onClick} className="float-end btn btn-danger btn-sm">Add to cart</a> */}
                </div>
            </div>
}