
# Video to ASCII Converter

## Overview

This project is a web application that captures video from the camera and converts it into ASCII art in real-time. The application is built using React and uses context for processing video frames.

## Project Structure

### main.jsx

The main entry point of the application. Here, the application is rendered into the DOM using React's `StrictMode`. This file also includes the styles and the context for video frame processing.

### App.jsx

The `App` component is responsible for connecting the `AsciiArt` and `VideoStream` components. It receives the `ProcessVideoFrameContext` through props and uses it to pass necessary functions and refs to the child components.

### components/index.js

The export file for components. It exports `AsciiArt` and `VideoStream` components for use in other parts of the application.

### AsciiArt/AsciiArt.jsx

The `AsciiArt` component is responsible for displaying the ASCII art. It contains a hidden canvas for processing video frames and a `<pre>` element for rendering the ASCII art.

### VideoStream/VideoStream.jsx

The `VideoStream` component captures video from the camera using the `getUserMedia` API. The video is displayed in a mirrored format, and each frame is passed to the `processVideoFrame` function for ASCII conversion.

### context/ProcessVideoFrameProvider.jsx

The context component that provides the `processVideoFrame` function along with refs for the canvas and ASCII art output. The `processVideoFrame` function processes video frames, converts them to grayscale, and then to ASCII characters.

### styles/index.min.css

The stylesheet for the application, defining the basic styles.

## Usage

1. Ensure that you have Node.js installed.
2. Clone the repository.
3. Install the dependencies using `npm install`.
4. Start the application using `npm start`.

## Components and Contexts

### AsciiArt

Component for displaying ASCII art.

- **props**:
  - `canvasRef`: a reference to the hidden canvas element.
  - `outputRef`: a reference to the `<pre>` element for rendering ASCII art.

### VideoStream

Component for capturing video from the camera.

- **props**:
  - `processVideoFrame`: function for processing each video frame.

### ProcessVideoFrameProvider

Context provider that supplies functions and refs for video frame processing.

- **children**: child components that will be provided with the context.

### Key Parameters

- **originalWidth**: original width of the video.
- **originalHeight**: original height of the video.
- **width**: width of the canvas for video processing (half of the original width).
- **height**: height of the canvas for video processing (half of the original height).
- **asciiCharacters**: string of ASCII characters used for image conversion.
