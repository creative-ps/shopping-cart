import React from "react";
import sendFormData from "./utility/sendFormData";

export default function ShippingAddress(){
    let NetAmount = localStorage.getItem("NetAmount");
    if(NetAmount){
        NetAmount = localStorage.getItem("NetAmount");
    }
    return (
        <div className="container">
            <div className="row">   
                <form className="p-md-5" method="post" action={sendFormData}>
                    <h4 className="fw-bold mb-0 alert alert-primary" role="alert">Amount to be paid: {NetAmount}</h4>
                    <h2 className="fw-bold mb-4 pt-sm-4">Add Shipping Address</h2>
                    <div class="row mb-4">
                        <div class="col-sm">
                            <label htmlFor={"userN"} class="form-label fw-bold">Name: </label>
                            <input required type="text" class="form-control" name="userName" id="userN" placeholder="Enter name"/>
                        </div>
                        <div class="col-sm">
                            <label htmlFor={"phoneN"} class="form-label fw-bold">Phone Number: </label>
                            <input required type="text" class="form-control" name="phoneNumber" id="phoneN" placeholder="Enter phone no."/>
                        </div>
                        <div class="col-sm">
                            <label htmlFor={"emailA"} class="form-label fw-bold">Email: </label>
                            <input required type="text" class="form-control" name="emailAddress" id="emailA" placeholder="Enter email no."/>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm">
                            <label htmlFor={"HomeA"} class="form-label fw-bold">House/Flat No.: </label>
                            <input required type="text" class="form-control" name="homeAddress" id="HomeA" placeholder="Enter House/Flat No."/>
                        </div>
                        <div class="col-sm">
                            <label htmlFor={"StreetN"} class="form-label fw-bold">Street No.: </label>
                            <input type="text" class="form-control" name="streetNumber" id="StreetN" placeholder="Enter Street No."/>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm">
                            <label htmlFor={"CityN"} class="form-label fw-bold">City: </label>
                            <input required type="text" class="form-control" name="CityName" id="CityN" placeholder="Enter City"/>
                        </div>
                        <div class="col-sm">
                            <label htmlFor={"state"} class="form-label fw-bold">State: </label>
                            <input required type="text" class="form-control" name="stateN" id="state" placeholder="Enter State"/>
                        </div>
                        <div class="col-sm">
                            <label htmlFor={"PinC"} class="form-label fw-bold">Pin Code: </label>
                            <input required type="text" class="form-control" name="PinCode" id="PinC" placeholder="Enter Pin"/>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label htmlFor={"ContriN"} class="form-label fw-bold">Country: </label>
                        <input type="text" class="form-control" name="Country" id="ContriN" placeholder="Enter Country"/>
                    </div>
                    <div class="mb-4">
                        <label htmlFor={"LandM"} class="form-label fw-bold">Land Mark: </label>
                        <input type="text" class="form-control" name="LandMark" id="LandM" placeholder="Land Nark"/>
                    </div>
                    <div class="mb-4 text-end">
                        <button type="submit" class="btn btn-success
                        " name="submit" id="submitB">Checkout</button>
                    </div>
                </form>
            </div>
        </div>
    );
}