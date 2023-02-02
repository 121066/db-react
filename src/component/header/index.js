import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
function MenuItem() {
  const navigate = useNavigate()
  const menuClick = ({ item, key, keyPath, domEvent }) => {
    // console.log(item, '点击', key, window.history)
    navigate(`/${key}/1`)
  }
  return (
    <>
      <Menu mode="horizontal" defaultSelectedKeys={['css']} onClick={menuClick}>
        <Menu.Item key="home">css</Menu.Item>
        <Menu.Item key="html">html</Menu.Item>
        <Menu.Item key="js">js</Menu.Item>
      </Menu>
    </>
  )
}
function Header() {
  return (
    <>
      <MenuItem />
    </>
  )
}
export default Header
