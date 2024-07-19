export const AsciiArt = (props) => {
  const { outputRef, canvasRef } = props;

  return (
    <>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <div className="PreFather">
        <pre ref={outputRef}></pre>
      </div>
    </>
  );
};
