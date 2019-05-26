//import React from "react";
//import ReactDOM from "react-dom";

require("cookieconsent");
require("./contact.js");


window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#335"
            },
            "button": {
                "background": "#ff7733"
            }
        },
        "theme": "classic",
        "content": {
            "message": "This website uses cookies to ensure you get the best experience.",
            "href": "/cookies"
        }
    });
});

/**
const Index = () => {
    return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("top"));
*/

