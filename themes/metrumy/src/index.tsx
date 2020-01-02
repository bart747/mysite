import * as React from "react";
import * as ReactDOM from "react-dom";

import "./cookies.js";
import "./contact.ts";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function (registration): void {
        console.log('Service worker registration succeeded:', registration);
    }, function (error): void {
        console.log('Service worker registration failed:', error);
    });
} else {
    console.log('Service workers are not supported.');
}

const Tester = () => {
    return <div className={"absolute"}>~</div>;
};

ReactDOM.render(<Tester />, document.getElementById("top"));

console.log("I'm runnin'");
