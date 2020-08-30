import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Lib
import menuData from './lib/menuData.json'
import getShortText from './lib/getShortText'

// Constants

// Styled components
const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #131313;
    background-image: url('/appScreenshot.png');
    background-size: contain;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`
const MenuButton = styled.button`
    width: 28px;
    height: 28px;
    background-color: transparent;
    background-image: url('/assets/apps.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    opacity: 0.7;
    transition: opacity 200ms ease-in;
    :hover {
        opacity: 1;
    }
`
const MenuWrapper = styled.div`
    position: fixed;
    top: 45px;
    right: 30px;
    /* box-shadow: -23px 18px 33px -5px rgba(0, 0, 0, 0.5);
    border-radius: 6px; */
    transition: all 300ms cubic-bezier(0.18, 0.61, 0.58, 1);
    opacity: ${(props) => (props.isMenuOpen ? 1 : 0)};
    transform: ${(props) => (props.isMenuOpen ? 'translateY(0px)' : 'translateY(100px)')};
`
const Icon = styled.div`
  width: 34px;
  height: 34px;
  background-image: url('${(props) => props.url}');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`
const Menu = styled.div`
    position: relative;
    border: 1.7px solid #333333;
    overflow: hidden;
    width: 420px;
    /* height: 600px; */
    border-radius: 6px;
    background-color: rgba(20, 20, 20, 0.9);
    backface-visibility: hidden;
    @supports (backdrop-filter: blur(14px)) {
        background-color: transparent;
        backdrop-filter: blur(14px) brightness(80%);
    }
`
const MenuShadowWrapper = styled.div`
    box-shadow: -23px 18px 33px -5px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
`
const MenuRow = styled.div`
    position: fixed;
    width: 100vw;
    height: 70px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    background-color: #2d2d2d;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 60px;
    box-sizing: border-box;
`
const Arrow = styled.div`
    width: 20px;
    height: 20px;
    background-image: ${(props) =>
        props.activeItem === 0
            ? props.isMouseOverFirstItem
                ? "url('/arrow4.svg')"
                : "url('/arrow.svg')"
            : props.isMouseOverFirstItem
            ? "url('/arrow3.svg')"
            : "url('/arrow2.svg')"};
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    margin-left: 328px;
    margin-bottom: -2px;
    z-index: 10;
    /* border: 1px solid red; */
`

const App = (props) => {
    // States
    const [activeItem, setActiveItem] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [isMouseOverFirstItem, setIsMouseOverFirstItem] = useState(false)

    return (
        <Main>
            <MenuRow>
                <Icon url={'/icon2.png'} style={{ marginRight: '15px' }} />
                <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
                <Icon url={'/icon1.png'} style={{ marginLeft: '15px', height: '26px', width: '26px' }} />
            </MenuRow>
            <MenuWrapper isMenuOpen={isMenuOpen}>
                <Arrow activeItem={activeItem} isMouseOverFirstItem={isMouseOverFirstItem} />
                <MenuShadowWrapper>
                    <Menu>
                        {menuData.map((item, index) => (
                            <Row
                                key={index}
                                title={item.displayText}
                                isActive={activeItem === index}
                                onClick={() => (activeItem === index ? setActiveItem(-1) : setActiveItem(index))}
                                nodes={item.nodes}
                                shortText={item.shortText ? item.shortText : undefined}
                                onMouseEnter={() => {
                                    if (index === 0) setIsMouseOverFirstItem(true)
                                }}
                                onMouseLeave={() => {
                                    if (index === 0) setIsMouseOverFirstItem(false)
                                }}
                            />
                        ))}
                    </Menu>
                </MenuShadowWrapper>
            </MenuWrapper>
        </Main>
    )
}

const RowMain = styled.div`
    width: 100%;
    position: relative;
    color: white;
`
const RowHeaderWrapper = styled.div`
    height: 60px;
    width: 100%;
    display: block;
    position: relative;
    /* border: 1px solid white; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding-left: 30px;
    box-sizing: border-box;
    background-color: ${(props) => (props.isActive ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.06)')};
    :hover {
        background-color: rgba(255, 255, 255, 0.23);
    }
    transition: all 100ms ease-in;
    cursor: pointer;
    opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`
const RowContent = styled.div`
    width: 100%;
    height: ${(props) => (props.isActive ? props.amountOfRows * 140 + 'px' : '0px')};
    /* border: 1px solid blue; */
    transition: height 300ms cubic-bezier(0.14, 0.62, 0.58, 1);
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
`
const ShortCutBox = styled.div`
    width: 33px;
    height: 33px;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    font-size: 14px;
    border-radius: 12px;
`
const Title = styled.span`
    font-size: 176x;
`
const NodeMain = styled.div`
    width: 140px;
    height: 140px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 22px;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    cursor: pointer;
    opacity: 0.7;
    transition: all 200ms ease-in;
    :hover {
        background-color: rgba(255, 255, 255, 0.07);
        opacity: 1;
    }
`
const NodeShortcut = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 11px;
    background: rgb(178, 36, 239);
    background: linear-gradient(
        90deg,
        rgba(178, 36, 239, 1) 0%,
        rgba(168, 48, 241, 1) 17%,
        rgba(131, 100, 251, 1) 76%,
        rgba(117, 121, 255, 1) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
`
const NodeText = styled.span`
    font-size: 17px;
    text-align: center;
    margin-top: 10px;
`

const Row = (props) => {
    // States
    const [isActive, setIsActive] = useState(props.isActive)

    useEffect(() => {
        setIsActive(props.isActive)
    }, [props.isActive])

    return (
        <RowMain onClick={() => props.onClick()}>
            <RowHeaderWrapper
                isActive={isActive}
                onMouseEnter={props.onMouseEnter ? props.onMouseEnter : null}
                onMouseLeave={props.onMouseLeave ? props.onMouseLeave : null}
            >
                <ShortCutBox>{props.shortText ? props.shortText : getShortText(props.title)}</ShortCutBox>
                <Title>{props.title}</Title>
            </RowHeaderWrapper>
            <RowContent isActive={isActive} amountOfRows={Math.ceil(props.nodes.length / 3)}>
                {props.nodes.map((node, index) => (
                    <NodeMain>
                        <NodeShortcut>{node.shortText ? node.shortText : getShortText(node.displayText)}</NodeShortcut>
                        <NodeText>{node.displayText}</NodeText>
                    </NodeMain>
                ))}
            </RowContent>
        </RowMain>
    )
}

export default App
