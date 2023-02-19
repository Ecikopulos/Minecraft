import React from 'react';
import {Wrapper} from "../../components/atoms/Wrapper";
import {BigFrame, StyledLogo} from "./Header.styles";

import logo from '/src/assets/images/logo.png'
import {Display} from "../../components/atoms/Display";


const Header = () => {
    return (
        <Wrapper>
            <BigFrame>
                <StyledLogo src={logo} alt='Server Logo'/>
                <Display address><p>ADRES SERWERA</p></Display>
                <Display discord><p>DISCORD</p></Display>
            </BigFrame>
            <Display play><p>LEARN HOW TO PLAY</p></Display>
        </Wrapper>
    )
}

export default Header;