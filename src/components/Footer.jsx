import React from 'react';
import styled from 'styled-components';
import SkuLogoImg from "../assets/image3.png";
import LogoIconImg from "../assets/image4.png";

const FooterContainer = styled.footer`
padding-top: 33px;
width: 100%;
`;

const FooterContent = styled.div`
padding-bottom: 16px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
box-sizing: border-box;
`;

const LeftSection = styled.div`
`;

const SkuLogo = styled.img`
`;

const RightSection = styled.div`
`;

const LogoIcon = styled.img`
justify-content: center;
display: flex;
flex-direction: column;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LeftSection>
          <SkuLogo src={SkuLogoImg} />
        </LeftSection>
        <RightSection>
          <LogoIcon src={LogoIconImg} />
        </RightSection>
      </FooterContent>
    </FooterContainer>
  );
}