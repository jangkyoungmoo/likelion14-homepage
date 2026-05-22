import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
width: 92px;
height: 44px;
outline: 2px #1A1A1A solid;
outline-offset: -2px;
color: #1A1A1A;
font-size: 18px;
font-family: Pretendard;
font-weight: 500;
background: ${(props) => (props.$active ? "#C6E400" : "#FFFFFF")};
`;

export default function Button({ text, active, onClick }) {
  return (
    <StyledButton $active={active} onClick={onClick}>
      {text}
    </StyledButton>
  );
}