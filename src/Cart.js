import React,{useEffect,useState} from "react";
import { useSearchParams, useNavigate } from "react-router";
export default function Cart(){
    const navigate = useNavigate();
    const [cartItm, setCartItm] = useState([]);
    let [searchParams] = useSearchParams();
    let arryLenth = searchParams.get("itmLength");
    let itmsArry = [];
    const items = localStorage.getItem("itm0");
    if(items){
        for(let i=0;i<arryLenth;i++){
            itmsArry.push(JSON.parse(localStorage.getItem("itm"+i)));
        }
    }

    useEffect(()=>{
        setCartItm([...itmsArry]);
    },[]);
    
    let initVal = 0;
    let grossAmt = itmsArry.reduce((acc,curr)=>{  
                return acc + curr.price;
    },initVal);

    const handleClick = ()=>{
        localStorage.setItem("NetAmount",JSON.stringify(grossAmt*(101/100)));
        navigate("/shippingAddress")
    }

 return  (
    <div className="container">
        <div className="row">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Item</th>
                        <th scope="col">No. of Item</th>
                        <th scope="col">Name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price</th>
                    </tr> 
                </thead>
                <tbody>
                {cartItm.map((item,indx)=>
                    <tr key={item.id}>
                        <td> {indx+1} </td>
                        <td> <img src={item.pic} width={100} /></td>
                        <td>{item.numItms}</td>
                        <td> {item.name} </td>
                        <td> {item.brand} </td>
                        <td> {item.price} </td>
                    </tr>)}
                    <tr>
                        <td className="fw-bold">Gross Total</td>
                        <td colSpan={"5"} className="text-end fw-bold">{grossAmt}</td>
                    </tr>
                    <tr>
                        <td className="fw-bold">1% GST</td>
                        <td colSpan={"5"} className="text-end fw-bold">{(grossAmt*(1/100))}</td>
                    </tr>
                    <tr>
                        <td className="fw-bold">Net Total</td>
                        <td colSpan={"5"} className="text-end fw-bold">{grossAmt*(101/100)}</td>
                    </tr>
                    <tr>
                        <td colSpan={"6"} className="text-end fw-bold">
                            <button className="btn btn-primary" onClick={handleClick}>Add Address</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
 );
}