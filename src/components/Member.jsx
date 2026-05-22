import TopSection from "../components/TopSection.jsx"
import React, { useState } from "react";
import styled from "styled-components";
import { MemberData } from "../components/MemberData.jsx"
import Footer from "../components/Footer.jsx";
import InfoBox from "../components/InfoBox.jsx";
import BgIcon1 from "../assets/image6.svg"
import BgIcon2 from "../assets/image5.svg"
import BgIcon3 from "../assets/image7.svg"

const MemberContainer = styled.div`
padding-left: 85px;
position: relative;
overflow: hidden;
`;

const MainTitle = styled.h2`
padding-top: 82px;
margin-bottom: 47px;
display: flex;
color: #1A1A1A;
font-size: 30px;
font-family: Pretendard;
font-weight: 700;
z-index: 1;
`;

const SubTitle = styled.h3`
display: flex;
color: #1A1A1A;
font-size: 24px;
font-family: Pretendard;
font-weight: 600;
`;

const TopManagementRow = styled.div`
display: flex;
gap: 22px;
margin-bottom: 83px;
`;

const CardGrid = styled.div`
display: flex;
gap: 22px;
flex-wrap: wrap;
margin-bottom: 83px;
`;

const MemberCard = styled.div`
width: 236px;
background: #F9F9F9;
border-left: 2px #1A1A1A solid;
border-top: 2px #1A1A1A solid;
border-right: 2px #1A1A1A solid;
border-bottom: 2px #1A1A1A solid;
`;

const ImageBox = styled.div`
width: 100%;
height: 236px;
display: block;
object-fit: cover;
border-bottom: 2px #1A1A1A solid;
img{
width: 100%;
height: 100%;
object-fit: cover;
}
`;

const BackgroundIcon = styled.img`
  position: absolute;
  z-index: -1;       
  pointer-events: none; 
  color: #F8FBE7;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: ${(props) => props.width};
`;

export default function Member() {
    const [selectedGen, setSelectedGen] = useState("14기");
    const currentData = MemberData[selectedGen];

    return (
        <div>
            <TopSection selectedGen={selectedGen} setSelectedGen={setSelectedGen} />
            <MemberContainer>
                <BackgroundIcon src={BgIcon1} top="0px" right="0px" width="460px" />
                <BackgroundIcon src={BgIcon2} top="1100px" left="0px" width="460px" />
                <BackgroundIcon src={BgIcon3} top="3000px" left="0px" width="460px" />
                <MainTitle>운영진</MainTitle>
                <TopManagementRow>
                    <div>
                        <SubTitle>대표</SubTitle>
                        {currentData.대표.map((member) => (
                            <MemberCard key={member.id}>
                            <ImageBox><img src={member.img} /></ImageBox>
                            <InfoBox member={member} />
                            </MemberCard>
                        ))}
                    </div>

                    <div>
                        <SubTitle>부대표</SubTitle>
                        {currentData.부대표.map((member) => (
                            <MemberCard key={member.id}>
                            <ImageBox><img src={member.img} /></ImageBox>
                            <InfoBox member={member} />
                            </MemberCard>
                        ))}
                    </div>
                </TopManagementRow>
                
                <SubTitle>PO</SubTitle>
                <CardGrid>
                    {currentData.PO.map((member) => (
                        <MemberCard key={member.id}>
                            <ImageBox><img src={member.img} /></ImageBox>
                            <InfoBox member={member} />
                        </MemberCard>
                    ))}
                </CardGrid>

                <SubTitle>FRONTEND</SubTitle>
                <CardGrid>
                    {currentData.FRONTEND.map((member) => (
                        <MemberCard key={member.id}>
                            <ImageBox><img src={member.img} /></ImageBox>
                            <InfoBox member={member} />
                        </MemberCard>
                    ))}
                </CardGrid>

                <SubTitle>BACKEND</SubTitle>
                <CardGrid>
                    {currentData.BACKEND.map((member) => (
                        <MemberCard key={member.id}>
                            <ImageBox><img src={member.img} /></ImageBox>
                            <InfoBox member={member} />
                        </MemberCard>
                    ))}
                </CardGrid>

                <MainTitle>아기사자</MainTitle>

                <SubTitle>PO</SubTitle>
                <CardGrid>
                    {currentData.아기사자_PO.map((member) => (
                        <MemberCard key={member.id}>
                            <ImageBox><img src={member.img} alt={member.name} /></ImageBox>
                            <InfoBox member={member} />
                        </MemberCard>
                    ))}
                </CardGrid>

                <SubTitle>FRONTEND</SubTitle>
                <CardGrid>
                    {currentData.아기사자_FRONTEND.map((member) => (
                        <MemberCard key={member.id}>
                            <ImageBox><img src={member.img} alt={member.name} /></ImageBox>
                            <InfoBox member={member} />
                        </MemberCard>
                    ))}
                </CardGrid>

                <SubTitle>BACKEND</SubTitle>
                <CardGrid>
                    {currentData.아기사자_BACKEND.map((member) => (
                        <MemberCard key={member.id}>
                            <ImageBox><img src={member.img} alt={member.name} /></ImageBox>
                            <InfoBox member={member} />
                        </MemberCard>
                    ))}
                </CardGrid>

                <Footer />
            </MemberContainer>
        </div>
    )
}