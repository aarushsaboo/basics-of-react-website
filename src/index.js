import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App";
import "./index.css";

const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);
ReactDOM.createRoot(entryPoint).render(React.createElement(App, null, null));

// React.createElement('div',
//     {id = 'content'},
//     React.createElement('p', null, 'Hello world')
// )
// First property is the jsx component, second is the props sent to the it, and the third are any child components.
