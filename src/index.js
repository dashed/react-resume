// 3rd-party imports

import "normalize.css";
import "sanitize.css";

import React from "react";
import ReactDOM from "react-dom";

// local imports

import Resume from "./components/resume";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Resume />, document.getElementById("root"));

registerServiceWorker();
