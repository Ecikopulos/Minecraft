import styled from "styled-components";
import {Wrapper} from "../../components/atoms/Wrapper.jsx";

export const HomeWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;

  div.mainSection {
    width: 100%;
    
    @media(min-width: 900px) {
      width: 76%;
    }
  }
`