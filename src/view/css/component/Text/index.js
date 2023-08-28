import "./index.css";
function Text() {
  return (
    <div>
      <div className="item">
        <h2>文字亮点</h2>
        <div className="item_light">
          明月几时有,把酒问青天,不止天上宫阙,今夕是何年,我欲乘风归去,又恐琼楼玉宇,高处不胜寒,起舞弄清影,转朱阁,低倚户。
        </div>
      </div>
      <div className="item">
        <h2>文字连续光影特效</h2>
        <div className="item_text">
          <span>我</span>
          <span>爱</span>
          <span>你</span>
          <span>我</span>
          <span>的</span>
          <span>国</span>
          <span>家</span>
        </div>
      </div>
      <div className="item">
        <h2>奥运五环</h2>
        <div className="olympic-rings">
          <span className="ring"></span>
          <span className="ring"></span>
          <span className="ring"></span>
          <span className="ring"></span>
          <span className="ring"></span>
        </div>
      </div>
      <div className="item">
        <h2>文字的交融展开</h2>
        <div className="blending">
          <span className="text">你好,前端开发工程师</span>
        </div>
      </div>
    </div>
  );
}
export default Text;
