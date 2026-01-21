import bg from "./assets/background.jpg"
import './App.css'

function App() {

  return (
    <>
    <div className='h-screen w-full bg-cover bg-center' style={{backgroundImage:`URL(${bg})`}}></div>
    </>
  )
}

export default App
