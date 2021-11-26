import React from 'react';
import ReactDOM,{ render } from "react-dom";
import Blog from './Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../static/css/custom.css"
import "../static/css/skins/default.css"
import "../static/css/theme-blog.css"
import "../static/css/theme-elements.css"
import "../static/css/theme.css"


render(
    <Blog />,
    document.getElementById('root')
);