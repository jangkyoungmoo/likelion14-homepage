import React from "react";
import styled from "styled-components";

const StyledInfoBox = styled.div`
  white-space: nowrap;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  background: #F8FBE7;
  gap: 9px;

  .name {
    color: #1A1A1A;
    font-size: 22px;
    font-family: Pretendard;
    font-weight: 700;
    text-align: left;
  }
  .dept {
    color: #1A1A1A;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500;
    text-align: left;
  }
  .num {
    color: #1A1A1A;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500;
    text-align: left;
  }
`;

export default function InfoBox({ member }) {
  return (
    <StyledInfoBox>
      <div className="name">{member.name}</div>
      <div className="dept">{member.dept}</div>
      <div className="num">{member.num}</div>
    </StyledInfoBox>
  );
}