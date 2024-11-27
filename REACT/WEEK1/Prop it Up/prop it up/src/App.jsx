import './App.css'
import PersonCard from './components/PersonCard'
function App() {


  return (
    <>
    <PersonCard firstName='Alice' lastName='Jenner' age={23} hairColor='blue'/>
    <PersonCard firstName='Karla' lastName='Mask' age={18} hairColor='black'/>
    <PersonCard firstName='Mark' lastName='Trump' age={30} hairColor='red'/>
    <PersonCard firstName='Bobe' lastName='Biden' age={40} hairColor='yellow'/>
    </>
  )
}

export default App
