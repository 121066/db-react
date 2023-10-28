import './index.css'
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
                <div className="left">
                    <img
                        className="img"
                        src="https://dbyxs.xyz:8002/uploads/a96f5d440c47e68c71d0f8283e719a9b"
                    />
                </div>
                <div className="center">
                    <img
                        className="img"
                        src="https://dbyxs.xyz:8002/uploads/a96f5d440c47e68c71d0f8283e719a9b"
                    />
                </div>
                <div className="right">
                    <img
                        className="img"
                        src="https://dbyxs.xyz:8002/uploads/a96f5d440c47e68c71d0f8283e719a9b"
                    />
                </div>
            </div>
            <div className="card_filter">
                <h2>图片滤镜</h2>
                <img src="https://img0.baidu.com/it/u=4166676771,1902492142&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" />
            </div>
        </>
    )
}
export default ModelCard
