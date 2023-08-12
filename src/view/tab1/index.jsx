import { Input } from "antd";
function Tab1() {
  const onChange = (e) => {
    console.log(e.target.value, "输入");
  };
  return (
    <div>
      <Input onChange={onChange} placeholder="请输入" allowClear></Input>
    </div>
  );
}
export default Tab1;
