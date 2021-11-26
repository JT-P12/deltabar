import React from "react";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-copyright bg-color-dark-scale-1">
                <div className="container py-2">
                    <div className="row py-4">
                        <div className="col-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
                            <a href="index.html" className="logo pe-0 pe-lg-3">
                                <img src="../static/img/favicon.png" className="opacity-5" height="32"/>
                            </a>
                        </div>
                        <div className="col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                            <p>© Copyright 2021. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
		</footer> 
    );
};

export default Footer;