import PersonCard from './components/PersonCard'
import './App.css'

function App() {


  return (
    <>
      <PersonCard firstName='Doe' lastName='Jane' age={23} hairColor='Brown' />
      <PersonCard firstName='Mark' lastName='Ben' age={35} hairColor='black' />

    </>
  )
}

export default App
