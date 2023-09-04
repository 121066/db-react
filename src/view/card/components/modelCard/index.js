import "./index.css";
function ModelCard() {
  return (
    <>
      <div>
        <h2>渐变边框</h2>
        <div className="card_border">
          <div className="container"></div>
        </div>
      </div>
      <div className="card_s">
        <div className="first-content">
          <span>奥林</span>
        </div>
        <div className="second-content">
          <span>春雷</span>
        </div>
      </div>
      <div className="card_hover">
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </>
  );
}
export default ModelCard;
