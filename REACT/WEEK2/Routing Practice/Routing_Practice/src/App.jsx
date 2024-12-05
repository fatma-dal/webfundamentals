import Home from './Views.jsx/Home'
import Number from './Views.jsx/Number'
import Message from './Views.jsx/Message'
import { Route, Routes } from "react-router-dom"




function App() {

  return (
    <>
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/:num" element={<Number/>}/> 
    <Route path="/:word/:coll/:bg" element={<Message/>}/>
  </Routes>
  </>
  )
}

export default App
