import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-inline: auto;
  padding: 10px;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.element};
  margin-top: ${({first}) => first ? '40px' : '10px'};
  border-radius: 4px;

  div.bar1 {
    @media (min-width: 700px) {
      display: flex;
      flex-direction: column;
    }
  }

  div.bar2 {
    @media (min-width: 700px) {
      display: flex;
    }
  }

  @media (min-width: 900px) {
    width: 100%;
    margin-inline: 0;
  }
`