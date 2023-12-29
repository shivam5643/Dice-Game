import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({seterror, error,selectedNumber,setSelectedNUmber}) => {
  const array = [1, 2, 3, 4, 5, 6];
  const numberselectorhandler=(value)=>{
    setSelectedNUmber(value);
    seterror("");
  }

  return (
    <SelectNumber>
      <p className="error">
        {error}
      </p>


     <div className="flex">
     
      {array.map((value, i) => (
        <Box
          isSelectted={value == selectedNumber}
          key={i}
          onClick={()=>numberselectorhandler(value)}
        >
          {value}
        </Box>
        ))}
      </div>
    <p> Select Number</p>
      
    </SelectNumber>
  );
};

export default NumberSelector;
const SelectNumber=styled.div`
   display: flex;
   flex-direction: column;
   align-items: end;
    .flex{
        display: flex;
        gap: 14px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
        
    }
    .error{
      color: red;
    }
`

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isSelectted ? "black" : "white")};
  color: ${(props) => (!props.isSelectted ? "black" : "white")};
  cursor: pointer;
`;
