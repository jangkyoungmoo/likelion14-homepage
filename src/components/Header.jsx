import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import homeIcon from "../assets/image1.png"

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
border: 1px #1A1A1A solid;
height: 76px;
`;

const LogoImage = styled.img`
align-items: center;
height: 46px;
width: auto;
`;

const BrandText = styled.div`
color: #1A1A1A;
font-size: 22px;
font-family: Pretendard;
font-weight: 700;
`;

const HeaderLeft = styled.div`
display: flex;
align-items: center;
border-right: 1px #1A1A1A solid;
padding-left: 56px;
padding-right: 56px;
gap: 16px;
`;

const HeaderRight = styled.div`
display: flex;
align-items: center;
border-left: 1px #1A1A1A solid;
`;

const MenuGroup = styled.div`
display: flex;
align-items: center;
gap: 61.5px;
padding-left: 62px;
padding-right: 62px;
`;

const LoginBox = styled.div`
display: flex;
border-left: 1px #1A1A1A solid;
height: 100%;
align-items: center;
padding-left: 62px;
padding-right: 62px;
`;

const MenuTab = styled.div`
color: #1A1A1A;
font-family: Pretendard;
font-weight: 600;
font-size: 18px;
`;

export default function Header() {
    
const buttonName1 = "지원하기"
const buttonName2 = "프로젝트"
const buttonName3 = "구성원"
const buttonName4 = "로그인/회원가입"
const buttonName5 = "멋쟁이사자처럼 서경대학교"

const { pathname } = useLocation();
const navigate = useNavigate();
const isAddPage = pathname === "/add";


    return (
        <div>
            <HeaderContainer>
                <HeaderLeft>
                    <LogoImage src={homeIcon} onClick={() => navigate("/")}/>
                    <BrandText onClick={() => navigate("/")}>{buttonName5}</BrandText>
                </HeaderLeft>
                <HeaderRight>
                    <MenuGroup>
                    <MenuTab onClick={() => navigate("/apply")}>{buttonName1}</MenuTab>
                    <MenuTab onClick={() => navigate("/project")}>{buttonName2}</MenuTab>
                    <MenuTab onClick={() => navigate("/members")}>{buttonName3}</MenuTab>
                    </MenuGroup>
                    <LoginBox>
                    <MenuTab onClick={() => navigate("/login")}>{buttonName4}</MenuTab>
                    </LoginBox>
                </HeaderRight>
            </HeaderContainer>
        </div>
    )
}
