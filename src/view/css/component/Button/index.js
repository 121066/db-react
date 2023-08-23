import { Button } from "antd";
import "./index.css";
function Botton() {
  setTimeout(() => {
    initTransiton();
    console.log("lal");
  }, 4000);
  const initTransiton = () => {
    const btn = document.getElementById("btn");
    const detail = document.querySelector(".detail");
    btn.onmouseenter = function () {
      detail.style.height = "auto";
      const { height } = detail.getBoundingClientRect();
      detail.style.height = "0";
      detail.style.transition = ".4s";
      // detail.offsetHeight;
      requestAnimationFrame = function () {
        console.log("lail");
        detail.style.height = height + "px";
      };
      requestAnimationFrame();
    };
    btn.onmouseleave = function () {
      detail.style.height = "0";
      detail.style.transition = ".3s";
    };
    console.log("lai l");
  };

  return (
    <div>
      <div className="item">
        <h2>高度自动过度</h2>
        <Button id="btn">自动过度</Button>
        <div className="detail">
          明月几时有 把酒问青天 不知天上宫阙 今夕是何年
        </div>
      </div>
      <div className="item">
        <h2>锥形渐变</h2>
        <div className="taper"></div>
      </div>
      <div className="item">
        <h2>五彩圆圈</h2>
        <div className="taper_list"></div>
      </div>
    </div>
  );
}
export default Botton;
