import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 'calc(100% - 300px)' : '100%')};
  font-family: Afogand;
  letter-spacing: 2px;
  height: 60px;
  background-color: #1B1B1B;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '300px' : '0')};
  z-index: 1000;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  border-bottom: 4px solid #343434
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 50px;

  div {
    width: 24px;
    height: 24px;
    border: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '1px solid #000000' : '1px solid #FFFFFF')};
    border-radius: 12px;
    background-color: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '#FFFFFF' : 'transparent')};
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 28px;
  span {
    font-size: 23px
  }


`

export const ToggleandTitle = styled.div`
  display: flex;
` 

export const LogoutText = styled.h6`
  cursor: pointer; // Makes the text clickable
  margin: 0; // Removes default margin
  font-size: 14px;
`;
