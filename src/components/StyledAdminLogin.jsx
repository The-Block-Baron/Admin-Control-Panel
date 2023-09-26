// src/components/StyledLanding.jsx
import styled from "styled-components";

export const LoginContainer = styled.div`
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

export const Container = styled.div`
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 40px 70px;
  margin-top: 100px;

`;
export const Form = styled.form`
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: #131313;
  font-family: Afogand;
  border: none;
  padding: 15px 200px 15px 30px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  border-radius: 15px;
  color: white;

`;

export const Button = styled.button`
  font-family: Afogand;
  letter-spacing: 3px;
  padding: 15px 40px;
  max-width: 150px;
  font-size: 20px;
  background-color: #151515;
  color: #fff;
  border: 1px solid #a9a9a9;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.5s;
  border-radius: 15px;
  margin-top: 30px;
  &:hover {
    background-color: #ffffff;
    color: #151515;
    border: 1px solid #000000;
  }
`;
