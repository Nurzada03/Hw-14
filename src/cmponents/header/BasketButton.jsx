
import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Component 6/Busket-Item.svg";



const BusketButton = ({count}) => {
  return (
    <StyledButton>
      <BasketIcon></BasketIcon>
      
      <StyledTitle>Your cart 
        
        
      </StyledTitle> 

        <StyledCounter id="counter">
          {count || 0}  
        </StyledCounter>
    </StyledButton>
  );
};


const StyledButton = styled.button`
  background-color: #5a1f08;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: 30px;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #2c0d00;
  }

  :hover > #counter {
    background-color: #672003;
  }
`;

export default BusketButton;


const StyledTitle = styled.span`
    margin-left: 12px ;
    margin-right: 24px;
`

const StyledCounter = styled.span`

  background-color: #8a2b06;
  border-radius:30px;
  font-weight:700;
  font-size: 20px;
  line-height:27px; 
  padding: 4px 20px;
    color: #ffffff;
`