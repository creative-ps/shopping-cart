import React,{useState} from "react";
import SearchTop from "./views/SearchTop";
import { handleProducts } from "./utility/appFunction";
import { useNavigate } from "react-router";

export default function HomeSearchBar(){
    const [srchTxt, setSrchTxt] = useState("");
    let navigate = useNavigate();
    let whiteSpace = new RegExp("\\s");
    const handleChange=(e)=>{
        setSrchTxt(e.target.value);
    }

    const handleSubmit = (e)=>{
        // handleProducts(srchTxt);
        if(srchTxt === "" || srchTxt === undefined){
            return;
        }
            console.info("submitting...");
            navigate("/category/"+srchTxt);   
    }

    const handleKeyDown = (e)=>{
        let countWspace = whiteSpace.test(e.target.value);
        if(e.key === "Enter" || e.keyCode === 13){
            if(countWspace){
                navigate("/");
                return;
            }else if(e.target.value == ""){
                navigate("/");
                return;
            }
            e.preventDefault();
            navigate("/category/"+srchTxt);   
        }
    }

    return <>
                <SearchTop  
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleKeyDown={handleKeyDown}
                srchTxt={srchTxt}
                />
          </>
}