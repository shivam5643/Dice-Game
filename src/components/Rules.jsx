import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RuleContainer>
    <h2>How to play dice game</h2>
    <div className='text'>
     <p>Select any number</p>
     <p>Click on dice image</p>
     <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
     <p>if you get wrong guess then  2 point will be dedcuted </p>    
    </div>
    </RuleContainer>
  )
}

export default Rules;

const RuleContainer=styled.div`
background-color:#FBF1F1 ;
max-width: 794px;

margin: 0 auto;
border-radius: 10px;
padding: 20px;
gap: 24px;
margin-top: 24px;
h2{
    font-size: 24px;
}
.text{
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
}


`;