// src/components/StyledLanding.jsx
import styled from "styled-components";

export const LandingContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141414;
  text-align: center;
  color: #e0e0e0;
`;

export const Title = styled.h1`
  color: #F7F7F7;
  margin-top: 40px;
  margin-bottom: 20px;
  font-family: Afogand;
  font-size: 35px;
  letter-spacing: 3px;
  text-align: center;
`;
export const Paragraph = styled.p`
  color: #F7F7F7;
  font-family: Crimson Text;
  font-size: 24px;
  letter-spacing: 3px;
  font-weight: 600;
  max-width: 1185px;
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const Container = styled.div`
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 60px 70px;
  padding-bottom: 20px;
`;

export const Button = styled.button`
  font-family: Afogand;
  letter-spacing: 3px;
  margin-bottom: 50px;
  padding: 35px 45px;
  font-size: 20px;
  background-color: #151515;
  color: #fff;
  border: 1px solid #a9a9a9;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.5s;
  border-radius: 15px;

  &:hover {
    background-color: #ffffff;
    color: #151515;
    border: 1px solid #000000;
  }
`;
