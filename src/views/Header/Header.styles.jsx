import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 300px;
  max-width: 70%;
  height: 200px;
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
  
  @media(min-width: 800px) {
    margin: 0;
    transform: translateX(0);
    order: 2;
    width: 40%;
    height: 300px;
  }

  @media(min-width: 1100px) {
    height: 400px;
  }
`

export const BigFrame = styled.div`
@media(min-width: 800px) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`