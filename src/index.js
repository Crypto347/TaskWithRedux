import ReactDOM from "react-dom";
import React from "react";
import store from './js/store/store';
import {Provider} from 'react-redux';
// vse imortiruem to 4to nujno
import App from "./js/components/App";
// i component App toje

ReactDOM.render( //provader pozvalayet svazat App s Redux, no 4tob on rabotal nado e6e sdelat connect() 
    <Provider store={store}> 
        <App/>
    </Provider>, 
    document.getElementById("root") // v index.html est div s id root. 
);