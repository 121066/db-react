import { useEffect } from "react";
import "./index.css";
function Cursor() {
  useEffect(() => {
    const pointer = document.querySelector(".pointer");
    let rad = 0;
    window.onmousemove = (e) => {
      if (Math.abs(e.movementX) + Math.abs(e.movementY) > 10) {
        rad = Math.atan2(e.movementX, -e.movementY);
      }
      pointer.style.transform = `translate(${e.clientX}px,${e.clientY}px) rotate(${rad}rad)`;
    };
  }, []);
  return (
    <div>
      <div className="pointer"></div>
    </div>
  );
}
export default Cursor;
