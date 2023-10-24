import { Button, Divider } from 'antd'
import { useCallback, useMemo, useState } from 'react'
import { useDemo } from '../../hooks/index'
import LayoutJs from './components/layout'
function Js() {
    const [num, numState] = useState(0)
    const { loading, Demo } = useDemo()
    console.log(loading)
    const addClick = useCallback(
        (type) => {
            switch (type) {
                case 'Add':
                    numState(num + 1)
                    break
                case 'Reduce':
                    numState(num - 1)
                    break
            }
        },
        [num],
    )
    const callback = useCallback(() => {
        console.log(num, '我变化了')
        Demo(true)
    }, [num])
    // console.log(callback(), '???')
    // console.log(num,'num')
    // Demo()
    console.log('执行')
    const info = useMemo(() => {
        return num + 10
    }, [num])
    return (
        <>
            <div>js模块</div>
            <h1>{num}</h1>
            <h1>我是useMemo监听计算来的{info}</h1>
            <Button type="primary" onClick={() => addClick('Add')}>
                增加
            </Button>
            <Button type="primary" onClick={() => addClick('Reduce')}>
                减少
            </Button>
            <Button onClick={() => callback()}>callback</Button>
            <Divider></Divider>
            <LayoutJs></LayoutJs>
            <Divider></Divider>
        </>
    )
}
export default Js
