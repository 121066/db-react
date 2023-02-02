import './index.css'
import { useParams } from 'react-router-dom'

// 文字渐变
function TextGradient() {
  const params = useParams()
  console.log(params, '???')
  return (
    <div className="item">
      <h2>文字渐变</h2>
      <div className="gradient">文字渐变示例</div>
    </div>
  )
}
// 平滑加载
function SmoothLoading() {
  return (
    <div className="item">
      <h2>平滑加载</h2>
      <div className="smooth"></div>
    </div>
  )
}
//异步加载
function AsyncSmooth() {
  return (
    <div className="item">
      <h2>异步平滑加载</h2>
      <div className="smooth_s"></div>
    </div>
  )
}
//边框渐变
function BorderColor() {
  return (
    <div className="item">
      <h2>边框渐变</h2>
      <div className="border_color"></div>
    </div>
  )
}
//三角形
function Triangle() {
  return (
    <div className="item">
      <h2>三角形</h2>
      <div className="triangle"></div>
    </div>
  )
}
//单一三角形
function TriangleS() {
  return (
    <div className="item">
      <h2>单一三角形</h2>
      <div className="triangle_s"></div>
    </div>
  )
}
//线性渐变
function Linear() {
  return (
    <div className="item">
      <h2>线性渐变(方向)</h2>
      <div className="linear"></div>
      <h2>线性渐变(角度)</h2>
      <div className="linear_s"></div>
    </div>
  )
}
//滚动条
function ScrollBar() {
  return (
    <div className="item">
      <h2>滚动条样式</h2>
      <div className="scroll_bar">
        <div className="scroll_bar_item"></div>
      </div>
    </div>
  )
}
//css节流
function Throttle() {
  return (
    <div className="item">
      <h2>CSS实现节流</h2>
      <button className="throttle_btn">点击</button>
    </div>
  )
}
//毛玻璃效果
function GroundGlass() {
  return (
    <div className="item">
      <h2>毛玻璃效果</h2>
      <div className="ground_glass"></div>
    </div>
  )
}
//卡片翻转
function CardFlip() {
  return (
    <div className="item">
      <h2>卡片翻转</h2>
      <div className="card_flip">
        <div className="card_top"></div>
        <div className="card_bottpm"></div>
      </div>
    </div>
  )
}
//聚光灯效果
function SpotLight() {
  return (
    <div className="item">
      <h2>聚光灯效果</h2>
      <div className="spotlight" data-content="zaldbyclly">
        zaldbyclly
      </div>
    </div>
  )
}
//圆形光环
function Halo() {
  return (
    <div className="item bgc">
      <h2 className="color">圆形光环</h2>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
//菱形图片
function DiamondImage() {
  return (
    <div className="item">
      <h2>菱形图片</h2>
      <div className="diamond">
        <img
          className="diamond_img"
          src="https://dbyxs.xyz:8002/uploads/a96f5d440c47e68c71d0f8283e719a9b"
        />
        <img
          className="diamond_img"
          src="https://dbyxs.xyz:8002/uploads/f168f492b7e97e2062cd6e005e5eae2a"
        />
        <img
          className="diamond_img"
          src="https://dbyxs.xyz:3006/uploads/fae4e814a5d9510d10277ff78ea6dc12"
        />
        <img
          className="diamond_img"
          src="https://dbyxs.xyz:3006/uploads/99336d242db92678679af7b9c92b3bda"
        />
        <img
          className="diamond_img"
          src="https://dbyxs.xyz:3006/uploads/702e37cafbd8c03e72579714bbe5ee6f"
        />
      </div>
    </div>
  )
}
//文字描边
function TextStroke() {
  return (
    <div className="item">
      <h2>文字描边</h2>
      <div className="text_stroke" data-content="zaldbyclly">
        zaldbyclly
      </div>
    </div>
  )
}
//磨砂玻璃效果
function Frosting() {
  return (
    <div className="item">
      <h2>磨砂玻璃效果</h2>
      <div className="frosting" data-content="zaldbyclly">
        <img
          className="frosting_img"
          src="https://img2.baidu.com/it/u=1050489754,1464924425&fm=253&fmt=auto&app=138&f=JPEG?w=1089&h=500"
        />
        <div className="modal"></div>
      </div>
    </div>
  )
}
function CssList() {
  return (
    <>
      <div className="css_list">
        <TextGradient></TextGradient>
        <SmoothLoading></SmoothLoading>
        <AsyncSmooth></AsyncSmooth>
        <BorderColor></BorderColor>
        <Triangle></Triangle>
        <Linear></Linear>
        <TriangleS></TriangleS>
        <ScrollBar></ScrollBar>
        <Throttle></Throttle>
        <GroundGlass></GroundGlass>
        <CardFlip></CardFlip>
        <SpotLight></SpotLight>
        <Halo></Halo>
        <DiamondImage></DiamondImage>
        <TextStroke></TextStroke>
        <Frosting></Frosting>
      </div>
    </>
  )
}
export default CssList
