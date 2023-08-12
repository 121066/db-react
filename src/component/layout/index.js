import { Route, Routes } from "react-router-dom";
import Home from "../../view/home";
import Html from "../../view/html";
import Js from "../../view/js";
import Tab1 from "../../view/tab1";
import Header from "../header";
function Layout() {
  return (
    <>
      <div>
        <Header></Header>
        <Routes>
          <Route element={<Home></Home>} path="/home/:id"></Route>
          <Route element={<Html></Html>} path="/html/:id"></Route>
          <Route element={<Js></Js>} path="/js/:id"></Route>
          <Route element={<Tab1></Tab1>} path="/tab1/:id"></Route>
          {/* <Navigate element={<Html></Html>} path="/404" /> */}
        </Routes>
        {/* <Home></Home> */}
      </div>
    </>
  );
}
export default Layout;
