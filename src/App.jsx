// import styled from 'styled-components';
import { useState } from 'react';
import './App.css'
import StartGame from './components/StartGame';
import Gameplay from './components/Gameplay';

function App() {
  const [isgameplay,SetIsgameplay]=useState(false);
 
  const toogleplay=(p)=>{
   SetIsgameplay((prev)=>!prev);
  }
  return (
    <>
     {isgameplay? <Gameplay/> : <StartGame toggle={toogleplay}/> }
    </>
  )
}

export default App

// const Button=styled.button`
// background-color: black;
// color: white;
// padding: 10 px;
// `