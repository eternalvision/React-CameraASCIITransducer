import { useEffect, useRef } from "react";

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
                console.error(err);
              });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [processVideoFrame]);

  return <video ref={videoRef}></video>;
};
