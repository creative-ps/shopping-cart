import React from "react";
import { useNavigate } from "react-router";

export default function SearchTop({handleSubmit, handleChange, handleKeyDown, srchTxt}){
    return <div className="col-10 px-0 py-5">
                <form method={"get"}>
                    <div class="input-group">
                            <input 
                                type="search" 
                                className="form-control border-0 p-2"
                                placeholder="Search by category : beauty, fragrances, furniture, groceries."
                                data-testid="home-search-bar"
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                value={srchTxt} 
                                aria-label="Recipient's username" 
                                aria-describedby="basic-addon2"
                            />
                            <button type="button" 
                                className="bttn_sb input-group-text fw-medium border-0"
                                data-testid="click here"
                                onClick={handleSubmit}>   
                                Click here
                            </button>  
                    </div>
                </form>       
            </div>
}