import PropTypes from "prop-types";

export const AsciiArt = (props) => {
    const { outputRef, canvasRef } = props;

    return (
        <>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            <pre ref={outputRef}></pre>
        </>
    );
};

AsciiArt.propTypes = {
    canvasRef: PropTypes.object.isRequired,
    outputRef: PropTypes.object.isRequired,
};
