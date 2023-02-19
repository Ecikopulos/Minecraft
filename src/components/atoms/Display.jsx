import styled from "styled-components";

export const Display = styled.div`
  width: 80%;
  max-width: 450px;
  height: 42px;
  background-color: ${({theme, play}) => play ? theme.colors.papa : theme.colors.element};
  border-radius: 3px;
  margin-top: 20px;
  margin-inline: auto;
  cursor: pointer;
  text-align: center;
  order: ${({address, discord}) => address ? '1' : discord ? '3' : 'unset'};
  color: ${({theme, play}) => play ? theme.colors.papaText : theme.colors.white};
  transition: color 0.3s, background-color 0.3s;
  
  :hover {
    color: ${({theme, play}) => play ? theme.colors.papa : theme.colors.papaText};
    background-color: ${({theme, play}) => play ? theme.colors.papaText : theme.colors.papa};
  }

  p {
    font-size: ${({theme}) => theme.fontSize.size1};
    font-weight: bold;
    line-height: 42px;
  }
  
  @media(min-width: 800px) {
    height: ${({play}) => play ? '70px' : '42px'};
    width: ${({play}) => play ? '80%' : '20%'};
    margin-top: ${({play}) => play ? '40px' : '0'};
   
    p {
      line-height: ${({play}) => play ? '70px' : '42px'};
      font-size: ${({theme, play}) => play ? theme.fontSize.size3 : theme.fontSize.size1};
    }
  }
`