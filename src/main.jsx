import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";

import "./styles/index.min.css";

import { VideoFrameContext } from "./context";

const { ProcessVideoFrameProvider, ProcessVideoFrameContext } =
  VideoFrameContext;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProcessVideoFrameProvider>
      <App ProcessVideoFrameContext={ProcessVideoFrameContext} />
    </ProcessVideoFrameProvider>
  </StrictMode>,
);
