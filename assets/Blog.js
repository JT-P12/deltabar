import React from "react";
import Head from "./Head";
import Main from "./Main";
import About from "./About";
import Footer from "./Footer";

function Blog() {
    return (
            <div class="body bg-color-dark-scale-1">
                <Head />
                <Main />
                <About />
                <Footer />
            </div>
        );
}

export default Blog;