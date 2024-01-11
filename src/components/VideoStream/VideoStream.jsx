import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const VideoStream = ({ processVideoFrame }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                        videoRef.current.style.transform = "scaleX(-1)";
                        videoRef.current
                            .play()
                            .then(() => {
                                requestAnimationFrame(() =>
                                    processVideoFrame(videoRef.current),
                                );
                            })
                            .catch((err) => {
                                console.error(
                                    "Ошибка воспроизведения видео: ",
                                    err,
                                );
                            });
                    }
                })
                .catch((err) => {
                    console.error("Ошибка доступа к камере: ", err);
                });
        }
    }, [processVideoFrame]);

    return <video ref={videoRef}></video>;
};

VideoStream.propTypes = {
    processVideoFrame: PropTypes.func.isRequired,
};
