import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Post1 from "./Posts/Post1/Post1";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Main() {
    return (
        <BrowserRouter>
            <div role="main" class="main bg-color-dark-scale-1">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/post1' element={<Post1 />} />
                </Routes>  
                <Footer />
            </div>
        </BrowserRouter>
    );
}
export default Main;