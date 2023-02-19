import styled from "styled-components";

export const SpaceBar = styled.div`
  height: 100px;
  width: 100%;
`

export const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: ${({active}) => active === '' ? 'none' : 'block'};
`

export const MobileBar = styled.div`
  position: fixed;
  z-index: 15;
  top: 0;
  left: 10px;
  width: calc(100% - 20px);
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};

  i {
    font-size: ${({theme}) => theme.fontSize.size4};
    color: ${({theme}) => theme.colors.white};
    transition: color 0.3s;
    cursor: pointer;
    margin-right: 20px;

    :hover {
      color: ${({theme}) => theme.colors.papa};
    }
  }

  @media (min-width: 1200px) {
    display: none;
  }
`

export const HamburgerNavigation = styled.nav`
  position: fixed;
  z-index: 20;
  height: calc(100% - 20px);
  width: 300px;
  max-width: 70vw;
  background-color: ${({theme}) => theme.colors.element};
  left: 0;
  top: 10px;
  transform: translateX(${({isActive}) => isActive ? '10px' : '-320px'});
  transition: transform 0.3s;
  border-radius: 6px;
  border: 2px solid hsla(0, 0%, 100%, .05);
  box-shadow: 10px 0 10px rgb(0 0 0 / 4%);
  overflow-y: scroll;

  @media (min-width: 1200px) {
    display: none;
  }
`

export const LinkWrapper = styled.div.attrs({className: 'menu'})`
  height: ${({menu}) => menu ? '60px' : '50px'};
  border-bottom: 1px solid hsla(0, 0%, 100%, .05);
  display:${({menu}) => menu ? 'flex' : 'static'} ;
  align-items: center;
  justify-content: space-between;
  
  a, p {
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.size1};
    font-weight: bold;
    margin-left: 18px;
    line-height: 50px;
  }

  a.active {
    color: ${({theme}) => theme.colors.papa};
    position: relative;

    ::before {
      content: "";
      display: block;
      height: 30px;
      width: 4px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -18px;
      margin: auto 0;
      background: ${({theme}) => theme.colors.papa};
      -webkit-border-radius: 0 5px 5px 0;
      -moz-border-radius: 0 5px 5px 0;
      border-radius: 0 5px 5px 0;
    }
  }
  
  i {
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.size2};
    font-weight: bold;
    margin-right: 18px;
  }
  
  p {
    font-size: ${({theme}) => theme.fontSize.size2};
  }
`


export const DesktopBar = styled.nav`

  display: none;

  @media (min-width: 1200px) {
    position: fixed;
    z-index: 15;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 100px;
    background-color: ${({theme}) => theme.colors.background};

    a, p {
      font-size: ${({theme}) => theme.fontSize.size2};
      color: ${({theme}) => theme.colors.papa};
      font-weight: bold;
      cursor: pointer;
      transition: color 0.3s;

      :hover {
        color: ${({theme}) => theme.colors.white};
      }
    }

    div.more {
      position: relative;
    }

    a.shop {
      height: 55px;
      width: 155px;
      text-align: center;
      line-height: 55px;
      color: ${({theme}) => theme.colors.papaText};
      background-color: ${({theme}) => theme.colors.papa};
      border-radius: 30px;
      transition: color 0.3s, background-color 0.3s;

      :hover {
        color: ${({theme}) => theme.colors.papa};
        background-color: ${({theme}) => theme.colors.papaText};
      }
    }
  }
`

export const MoreModal = styled.div`
  width: 114px;
  background-color: ${({theme}) => theme.colors.papa};
  position: absolute;
  top: 50px;
  left: 0;
  transform: translateX(-25%);
  border-radius: 6px;
  display: ${({active}) => active ? 'block' : 'none'};

  ::before {
    content: "";
    display: block;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -7px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid ${({theme}) => theme.colors.papa};
  }
}
`

export const MoreLink = styled.div`
  height: 32px;
  width: 100%;
  text-align: center;

  a {
    color: ${({theme}) => theme.colors.papaText};
    font-size: ${({theme}) => theme.fontSize.size1};
    line-height: 32px;
  }
`
