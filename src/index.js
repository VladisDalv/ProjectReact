import React from "react"

//import ReactDom from "react-dom"
import ReactDom from "react-dom/client"

import App from "./App.jsx";

// ReactDom.render(<App/>, document.getElementById("root"));

const root = ReactDom.createRoot(
    document.getElementById("root")
);
root.render(<App someName={'Gagagagag'}/>)