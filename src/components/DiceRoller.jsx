import React, { useState } from 'react'
import styled from 'styled-components';

const DiceRoller = ({currentDice,roleDice}) => {

   
      

  return (
    <DiceRoll>
       <div className='div1'>
        <img onClick={roleDice} src={`dice_${currentDice}.png`} alt="dice1" />
        </div>
       <p>Click on Dice to roll</p>
    </DiceRoll>
  )
}

export default DiceRoller;

const DiceRoll=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    cursor: pointer;
    p{
        font-size: 24px;
        font-weight: 500px;
    }
`