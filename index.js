import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./src/App";
import SearchResult from "./src/SearchResult";
import Main from "./src/Main";
import Cart from "./src/Cart";
import ShippingAddress from "./src/ShippingAddress";


const root = createRoot(document.getElementById("root"));
root.render(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App/>}>
                            <Route path="/" element={<Main/>}></Route>
                            <Route path="category/:cate" element={<SearchResult/>}></Route>
                        </Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                        <Route path="/shippingAddress" element={<ShippingAddress/>}></Route>
                    </Routes>
                </BrowserRouter>
            </>
        );