import "./index.css";
function Image() {
  const img = require("../../../../assets/image/006.jpg");
  return (
    <div>
      <div className="item">
        <h2>图片阴影</h2>
        <div className="item_img_filter">
          <img src={img} />
        </div>
      </div>
    </div>
  );
}
export default Image;
