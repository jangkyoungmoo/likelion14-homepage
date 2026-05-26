import styled from "styled-components";
import { useState } from "react";
import Button from "../components/Button.jsx"

const TopSectionContainer = styled.div`
padding-bottom: 45px;
border-bottom: 2px #1A1A1A solid;
max-width: 1326px;
margin: 0 auto;
`;

const Title = styled.h1`
color: #1A1A1A;
font-size: 36px;
font-family: Pretendard;
font-weight: 700;
text-align: left;
display: flex;
`;

const Description = styled.p`color: #1A1A1A;
font-size: 18px;
font-family: Pretendard;
font-weight: 500;
width: 100%;
padding-top: 17px;
padding-bottom: 50px;
text-align: left;
`;

const TabButtonGroup = styled.div`
display: flex;
gap: 18px;
`;

export default function TopSection ({ selectedGen, setSelectedGen }) {
    const generations = ["14기", "13기", "12기", "11기"];

    return (
        <TopSectionContainer>
            <Title>구성원</Title>
            <Description>서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.</Description>

            <TabButtonGroup>
                {generations.map((gen) => (
                    <Button
                    key={gen}
                    text={gen}
                    active={selectedGen === gen}    
                    onClick={() => setSelectedGen(gen)}
                    />
                ))}
            </TabButtonGroup>
        </TopSectionContainer>
    )
}