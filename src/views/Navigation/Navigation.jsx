import React, {useState} from 'react';
import {Wrapper} from "../../components/atoms/Wrapper.jsx";
import Hamburger from "../../components/molecules/Hamburger.jsx";
import {
    DesktopBar,
    HamburgerNavigation,
    LinkWrapper,
    MobileBar,
    MoreLink,
    MoreModal, Shadow,
    SpaceBar
} from "./Navigation.styles";

const Navigation = () => {

    const [isActive, setIsActive] = useState('')
    const [displayMore, setDisplayMore] = useState(false)

    const handleDisplayMore = () => {
        setDisplayMore(!displayMore)
    }

    const handleHamburger = () => {
        if (isActive === '') {
            setIsActive('is-active')
            document.body.classList.add('is-active')
        } else {
            setIsActive('')
            document.body.classList.remove('is-active')
        }
    }

    return (
        <Wrapper>
            <SpaceBar/>
            <Shadow active={isActive}/>
            <MobileBar>
                <Hamburger isActive={isActive} handleHamburger={handleHamburger}/>
                <div>
                    <i className="fa-brands fa-discord"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </MobileBar>
            <HamburgerNavigation isActive={isActive}>
                <LinkWrapper menu><p>MENU</p><i className="fa-solid fa-xmark"
                                                onClick={handleHamburger}></i></LinkWrapper>
                <LinkWrapper><a>STORE</a></LinkWrapper>
                <LinkWrapper><a className='active'>EVENTS</a></LinkWrapper>
                <LinkWrapper><a>FAQ</a></LinkWrapper>
                <LinkWrapper><a>STAFF</a></LinkWrapper>
                <LinkWrapper><a>STATS</a></LinkWrapper>
                <LinkWrapper><a>STATS</a></LinkWrapper>
                <LinkWrapper><a>STATS</a></LinkWrapper>
                <LinkWrapper> <a>STATS</a></LinkWrapper>
                <LinkWrapper><a>STATS</a></LinkWrapper>
                <LinkWrapper> <a>STATS</a></LinkWrapper>
                <LinkWrapper> <a>STATS</a></LinkWrapper>
                <LinkWrapper><a>STATS</a></LinkWrapper>
                <LinkWrapper> <a>STATS</a></LinkWrapper>
                <LinkWrapper> <a>STATS</a></LinkWrapper>
                <LinkWrapper><a>STATS</a></LinkWrapper>
                <LinkWrapper><a>STATS</a></LinkWrapper>
            </HamburgerNavigation>
            <DesktopBar>
                <a>EVENTS</a>
                <a>FAQ</a>
                <a>START</a>
                <a className='shop'>STORE</a>
                <a>STAFF</a>
                <a>STATS</a>
                <div className='more'>
                    <p onClick={handleDisplayMore}>MORE <i className="fa-solid fa-caret-down"></i></p>
                    <MoreModal active={displayMore}>
                        <MoreLink><a>TEXT</a></MoreLink>
                        <MoreLink><a>TEXT</a></MoreLink>
                        <MoreLink><a>TEXT</a></MoreLink>
                        <MoreLink><a>TEXT</a></MoreLink>
                        <MoreLink><a>TEXT</a></MoreLink>
                        <MoreLink><a>TEXT</a></MoreLink>
                    </MoreModal>
                </div>
            </DesktopBar>
        </Wrapper>
    )
}

export default Navigation;