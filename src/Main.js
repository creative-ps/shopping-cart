import React,{useState,useContext} from "react";
import HomeSearchBar from "./HomeSearchBar";
import SearchResult from "./SearchResult";
// import {data} from "../products";
// import { handleProducts } from "./utility/appFunction";
import AllData from "./AllProducts";
export default function Main(){
    const [srchRes, setSrchRes] = useState("");
    

    return  <>
                <main>
                    <section>
                        <div className="container">
                            <div className="row">
                                {/* <SearchResult srchRes={srchRes}/> */}
                                <AllData/>
                            </div>
                        </div>
                    </section>
                </main>
            </>        
}