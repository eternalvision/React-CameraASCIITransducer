import { Components } from "./components";
import { useContext } from "react";

const { AsciiArt, VideoStream } = Components;

export const App = (props) => {
    const { ProcessVideoFrameContext } = props;
    const { processVideoFrame, canvasRef, outputRef } = useContext(
        ProcessVideoFrameContext,
    );

    return (
        <>
            <AsciiArt canvasRef={canvasRef} outputRef={outputRef} />
            <VideoStream processVideoFrame={processVideoFrame} />
        </>
    );
};
