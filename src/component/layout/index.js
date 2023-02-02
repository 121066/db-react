import Header from '../header'
import Home from '../../view/home'
import Js from '../../view/js'
import { Routes, Route, Navigate } from 'react-router-dom'
import Html from '../../view/html'
function Layout() {
  return (
    <>
      <div>
        <Header></Header>
        <Routes>
          <Route element={<Home></Home>} path="/home/:id"></Route>
          <Route element={<Html></Html>} path="/html/:id"></Route>
          <Route element={<Js></Js>} path="/js/:id"></Route>
          {/* <Navigate element={<Html></Html>} path="/404" /> */}
        </Routes>
        {/* <Home></Home> */}
      </div>
    </>
  )
}
export default Layout
