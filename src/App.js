import './App.css'
// import axios from 'axios'
// import cookie from 'react-cookies'
import Layout from './component/layout/index.js'
import { BrowserRouter } from 'react-router-dom'
function App() {
  // console.log(cookie)
  // let d = new Date()
  // d.setTime(d.getTime() + 60 * 60 * 1000)
  // cookie.save('Appname', 'value', { expires: d })
  // axios.defaults.withCredentials = true

  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </>
    </div>
  )
}

export default App
