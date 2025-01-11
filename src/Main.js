import React,{useState,useContext} from "react";
import HomeSearchBar from "./HomeSearchBar";
import SearchResult from "./SearchResult";
// import {data} from "../products";
// import { handleProducts } from "./utility/appFunction";
import AllData from "./AllProducts";
export default function Main(){
    const [srchRes, setSrchRes] = useState("");
    const dataUrl = 'https://dummyjson.com/products';
    // const handleProducts = (getProduct)=>{
    //     // const res = getData();
    //     data.filter((res)=>{
    //         if(itm.name == getProduct){
    //             setSrchRes(itm)
    //         }
    //     })
    // }
    

    return  <>
                <main>
                    <section>
                        <div className="container">
                            <div className="row">
                                {/* <SearchResult srchRes={srchRes}/> */}
                                <AllData url={dataUrl}/>
                            </div>
                        </div>
                    </section>
                </main>
            </>        
}