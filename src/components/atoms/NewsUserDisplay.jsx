import styled from "styled-components";

export const NewsUserDisplay = styled.div`
  display: flex;
  margin-bottom: 8px;
  
   p {
     color:${({theme, user}) => user ? theme.colors.papa : theme.colors.element2} ;
    font-size: ${({theme}) => theme.fontSize.special0};
     font-weight: ${({user}) => user ? 'bold' : 'normal'};
  }
  
  i {
    color: ${({theme}) => theme.colors.element2};
    margin-right: 10px;
  }
  
  @media(min-width: 700px) {
    margin-right: 15px;
  }
`