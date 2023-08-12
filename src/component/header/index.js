import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.css";
function MenuItem() {
  const navigate = useNavigate();
  const menuClick = ({ item, key, keyPath, domEvent }, i) => {
    navigate(`/${key}/1`);
  };
  const tabList = [
    { id: 1, key: "home", name: "css" },
    { id: 2, key: "html", name: "html" },
    { id: 3, key: "js", name: "js" },
    { id: 4, key: "tab1", name: "tab1" },
  ];
  return (
    <>
      <Menu
        mode="horizontal"
        className="bg"
        defaultSelectedKeys={["css"]}
        onClick={menuClick}
      >
        {/* <Menu.Item key="home">css</Menu.Item>
        <Menu.Item key="html">html</Menu.Item>
        <Menu.Item key="js">js</Menu.Item> */}
        {tabList.map((item) => {
          return <Menu.Item key={item.key}>{item.name}</Menu.Item>;
        })}
      </Menu>
    </>
  );
}
function Header() {
  return (
    <>
      <MenuItem />
    </>
  );
}
export default Header;
