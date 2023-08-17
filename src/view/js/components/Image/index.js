import { useEffect } from "react";
import "./index.css";
function Image() {
  useEffect(() => {
    const box = document.querySelectorAll(".box");
    const image = document.querySelector(".image");
    box.forEach((item) => {
      item.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      item.addEventListener("drop", () => {
        item.appendChild(image);
      });
    });
  }, []);
  return (
    <div>
      <div>
        <h2>图片拖动</h2>
        <div className="image_list">
          <div className="box">
            <div className="image" draggable="true"></div>
          </div>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
}
export default Image;
