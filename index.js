import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router";
import App from "./src/App";
import SearchResult from "./src/SearchResult";
import Main from "./src/Main";
import Cart from "./src/Cart";
import ShippingAddress from "./src/ShippingAddress";
import ProductPage from "./src/views/ProductPage";


const root = createRoot(document.getElementById("root"));
root.render(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App/>}>
                            <Route path="/" element={<Main/>}></Route>
                            <Route path="/category/:cate" element={<SearchResult/>}></Route>
                            <Route path="/cart" element={<Cart/>}></Route>
                            <Route path="/shippingAddress" element={<ShippingAddress/>}></Route>
                            <Route path="/:category/:title" element={<ProductPage/>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        );