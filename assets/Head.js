import React from "react";
import {Link} from "react-router-dom";

const Head = () => {
    return (
        <div class="align-items-center justify-content-center mb-2 mb-lg-0 pb-5 logo pe-0 pe-lg-3">
            <Link to="/" >
                <img src="../static/img/favicon.png" height="225" />
            </Link>
        </div>
    );
}
export default Head