import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import DiceRoller from "./DiceRoller";
import { useState } from "react";
import Rules from "./Rules";


const Gameplay = () => {
  const [score, setScore]=useState(0);
  const [selectedNumber, setSelectedNUmber] = useState();
  const[currentDice,setCurrentDice]=useState(1);
  const[error,setError]=useState("");
  const[rules,setRules]=useState(false);


  const generateRandomNo= (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
  }
  const resetscore=()=>{
    setScore(0);
  }

  const roleDice=()=>{
    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }
    
    const randomNO=generateRandomNo(1,7);
    setCurrentDice((prev)=>randomNO);

    if(selectedNumber==randomNO){
      setScore((prev)=>prev+randomNO);
    }else{
      setScore((prev)=>prev-2);
    }
    setSelectedNUmber(undefined);
  }

  
  return (
    <Mainconatainer>
        <div className="top_container">
        <TotalScore score={score}/>
        <NumberSelector
        seterror={setError}
         error={error}
         selectedNumber={selectedNumber}
         setSelectedNUmber={setSelectedNUmber}
        />
        
        </div>
        <DiceRoller
         currentDice={currentDice}
         roleDice={roleDice}
        />
       <div className="btns">
       <Button1 onClick={resetscore}>Reset Score</Button1>
        <Button onClick={()=>setRules((prev)=>!prev)} >{rules? "Hide" : "Show"} Rules</Button>
        </div>
       
       {rules && <Rules />}
    </Mainconatainer>
  )
}

export default Gameplay

const Mainconatainer=styled.div`
    padding: 75px;

   .top_container{
    display: flex;
    justify-content: space-around;
    align-items:end;

   }
   .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 14px;
    margin-right: 280px;
   }

`;
const Button =styled.button`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  margin-left: 300px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
const Button1 =styled.button`
  color: black;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  margin-left: 300px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  background-color: white;
  border: 1px solid black;
  &:hover{
    background-color: black;
    
    color: white;
    transition: 0.3s background ease-in;
  }
`