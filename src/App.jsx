import './App.css'
import { useState } from 'react'
import CurValue from "./components/Curvalue.jsx"

function App() {

 //custom hooks 




  return (
    <>
    <div >
    <div className="h-100 w-150 bg-gray-400 mt-50" style={{
      padding:'20px',
      border:'1px solid white',
      borderRadius:'10px'
    }}>
      <center><h1 className='text-black' style={{fontSize:"30px",fontWeight:"bold"}}>Currency Convertor</h1></center>
      {/* //button for swapping values */}
      <button style={{
        zIndex:"2",
        padding:"5px",
        color:"white",
        backgroundColor:"blueviolet",
        fontSize:"18px",
        fontWeight:"bold",
        borderRadius:"5px",
        position:"absolute",
        marginTop:"90px",
        marginLeft:"250px"
      }}>Swap</button>
      <CurValue FromOrTo="From" currencyType={Fromcur}/>   
      <CurValue FromOrTo="To" currencyType={Tocur}/>
      <button className='w-full h-10 text-white bg-blue-500 rounded mt-5'
      style={{pointer:'cursor',}}>Convert {Fromcur} to {Tocur}</button>
    </div>
    </div>
    </>
  )
}

export default App
