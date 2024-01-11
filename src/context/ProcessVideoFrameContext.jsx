import { createContext, useCallback, useRef } from "react";
import PropTypes from "prop-types";

export const ProcessVideoFrameContext = createContext();

const originalWidth = 1160;
const originalHeight = 400;
const width = originalWidth / 2;
const height = originalHeight / 2;
const asciiCharacters =
    "@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

export const ProcessVideoFrameProvider = ({ children }) => {
    const canvasRef = useRef(null);
    const outputRef = useRef(null);

    const processVideoFrame = useCallback(
        (videoElement) => {
            const canvas = canvasRef.current;
            const output = outputRef.current;
            if (canvas && output && videoElement) {
                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext("2d", {
                    willReadFrequently: true,
                });
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                ctx.drawImage(videoElement, 0, 0, width, height);

                const imageData = ctx.getImageData(0, 0, width, height);
                let asciiImage = "";
                const charLength = asciiCharacters.length;

                for (let i = 0; i < imageData.data.length; i += 4) {
                    const gray =
                        (imageData.data[i] +
                            imageData.data[i + 1] +
                            imageData.data[i + 2]) /
                        3;
                    const index = Math.floor((gray * charLength) / 255);
                    asciiImage += asciiCharacters.charAt(index);

                    if (i % (width * 4) === 0) {
                        asciiImage += "\n";
                    }
                }

                output.textContent = asciiImage;
            }
            setTimeout(
                () =>
                    requestAnimationFrame(() =>
                        processVideoFrame(videoElement),
                    ),
                60,
            );
        },
        [canvasRef, outputRef],
    );

    return (
        <ProcessVideoFrameContext.Provider
            value={{ processVideoFrame, canvasRef, outputRef }}>
            {children}
        </ProcessVideoFrameContext.Provider>
    );
};

ProcessVideoFrameProvider.propTypes = {
    children: PropTypes.any.isRequired,
};
