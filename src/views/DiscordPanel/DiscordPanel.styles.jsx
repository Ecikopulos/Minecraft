import styled from "styled-components";
import {SectionWrapper} from "../../components/atoms/SectionWrapper.jsx";

export const Wrapper = styled(SectionWrapper)`
display: none;
  
  @media(min-width: 900px) {
    display: block;
    width: 20%;
    margin-top: 40px;
    height: 50vh;
  }
`