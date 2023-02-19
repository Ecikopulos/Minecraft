import styled from "styled-components";

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.papa};
  font-size: ${({theme}) => theme.fontSize.size2};
  margin: 10px 0;
`

export const TitleH1 = styled.h1`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSize.size3};
  text-align: center;
  margin-bottom: 20px;
`