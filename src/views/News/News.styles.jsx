import styled from "styled-components";

export const BigTime = styled.div`
display: none;
  
  @media(min-width: 700px) {
    height: 68px;
    width: 60px;
    margin-right: 10px;
    background-color: ${({theme}) => theme.colors.background};
    border-radius: 6px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    
    p {
      color: ${({theme}) => theme.colors.papa};
      font-size: ${({theme}) => theme.fontSize.size4};
      font-weight: bold;
    }
    
    p.small {
      font-size: ${({theme}) => theme.fontSize.special0};
    }
  }
`