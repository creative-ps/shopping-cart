import React,{useContext} from "react";
import HomeSearchBar from "../HomeSearchBar";
import { Link } from "react-router";
import { CartContext } from "../utility/cartContext";
export default function HeaderTop(){
    const crtItems = useContext(CartContext);
    const TotalCrtItems = crtItems.cartItem.length;
    let cartItemsSend = encodeURI(`/cart/?itmLength=${TotalCrtItems}`);
    
    if(TotalCrtItems>0){
        crtItems.cartItem.forEach((ele,index) => {
            localStorage.setItem("itm"+index,JSON.stringify(ele));
        });
    }

    return <><div className="bg-light fixed-top py-3 d-flex justify-content-between align-items-center container-fluid">
                <svg id="logo-38" width="100" height="42" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
                <Link to={cartItemsSend} className="ms-auto mt-1 me-5 d-block _appCartIcn position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                    <span className="cartItems position-absolute">
                        {TotalCrtItems}
                    </span>
                </Link>
                <div className="d-flex _sm me-4">
                    <Link to=""><span className="tw d-inline-block"></span></Link>
                    <Link to=""><span className="fb d-inline-block"></span></Link>
                    <Link to=""><span className="inst d-inline-block"></span></Link>
                    <Link to=""><span className="yt d-inline-block"></span></Link>
                </div>
                <button type="button" className="btn btn-danger _loginBtn border-0 rounded-0">Login</button>
            </div>
            <section className="container_sb mb-4 pt-5">
                    <div className="row justify-content-center  m-0">
                        <div className="d-flex justify-content-center">
                            <HomeSearchBar/>
                        </div>
                    </div>    
            </section> </>
}