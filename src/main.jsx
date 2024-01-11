import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./css/index.min.css";

import { VideoFrameContext } from "./context";

const { ProcessVideoFrameProvider, ProcessVideoFrameContext } =
    VideoFrameContext;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ProcessVideoFrameProvider>
            <App ProcessVideoFrameContext={ProcessVideoFrameContext} />
        </ProcessVideoFrameProvider>
    </React.StrictMode>,
);
