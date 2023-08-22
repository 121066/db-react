import { useEffect } from "react";
import "./index.css";
function Image() {
  // 图片拖动
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
  // 图片头像
  useEffect(() => {
    const image = document.querySelector(".img_border");
    const input = document.querySelector("#file");
    input.addEventListener("change", () => {
      image.src = URL.createObjectURL(input.files[0]);
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
      <div>
        <h2>图片头像</h2>
        <div>
          <img className="img_border" />
          <input type="file" id="file" />
        </div>
      </div>
    </div>
  );
}
export default Image;
