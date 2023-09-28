import styled from "styled-components";

export const CardContainer = styled.div`
  border: 3px solid #3E3E3E;
  border-radius: 15px;
  background-color: #121212;
  padding: 10px;
  margin: 10px;
  padding: 20px 40px;
  width: 350px
`;

export const Username = styled.h2`
    text-align:center;
    font-family: Afogand;
    letter-spacing: 2px;
    margin-bottom: 40px;
`
export const Button = styled.button`
  font-family: Afogand;
  letter-spacing: 3px;
  padding: 15px 40px;
  max-width: 2000px;
  font-size: 15px;
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

export const Details = styled.p`
    font-family: Inter;
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: 500;
`

export const Result = styled.span`
    font-family: Inter;
    font-weight: 200;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;