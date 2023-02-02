import { useCallback, useMemo, useState, useEffect } from 'react'
import { Button } from 'antd'
function Js() {
  const [num, numState] = useState(0)
  const addClick = (type) => {
    switch (type) {
      case 'add':
        numState(num + 1)
        break
      case 'reduce':
        numState(num - 1)
        break
    }
  }
  const callback = useCallback(() => {
    console.log(num, '我变化了')
  }, [num])
  // console.log(callback(), '???')
  const info = useMemo(() => {
    return num + 10
  }, [num])
  return (
    <>
      <div>js模块</div>
      <h1>{num}</h1>
      <h1>我是useMemo监听计算来的{info}</h1>
      <Button type="primary" onClick={() => addClick('add')}>
        增加
      </Button>
      <Button type="primary" onClick={() => addClick('reduce')}>
        减少
      </Button>
      <Button onClick={() => callback()}>callback</Button>
    </>
  )
}
export default Js
