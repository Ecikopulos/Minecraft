import styled from "styled-components";

export const Text = styled.p`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSize.size1};
  line-height: 30px;
`