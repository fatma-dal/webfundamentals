import { Route, Routes } from "react-router-dom"
import List from './components/List'
import Show from './components/Show'

function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path="/" element={<List />} />



        </Routes>
      </div></>
  )
}

export default App
