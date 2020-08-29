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
    /* background-color: #131313; */
    background-image: url('/appScreenshot.png');
    background-size: contain;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`
const MenuButton = styled.button`
    position: fixed;
    top: 20px;
    right: 60px;
    width: 40px;
    height: 40px;
    background-color: transparent;
    background-image: url('/assets/apps.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
`
const Menu = styled.div`
    top: 80px;
    right: 30px;
    position: fixed;
    border: 1.7px solid #333333;
    overflow: hidden;
    width: 460px;
    /* height: 600px; */
    border-radius: 6px;
    background-color: transparent;
    backdrop-filter: blur(14px) brightness(80%);
    box-shadow: -23px 18px 33px -5px rgba(0, 0, 0, 0.7);
`

const App = (props) => {
    // States
    const [activeItem, setActiveItem] = useState(0)
    return (
        <Main>
            <MenuButton />
            <Menu>
                {menuData.map((item, index) => (
                    <Row
                        key={index}
                        title={item.displayText}
                        isActive={activeItem === index}
                        onClick={() => (activeItem === index ? setActiveItem(-1) : setActiveItem(index))}
                        nodes={item.nodes}
                        shortText={item.shortText ? item.shortText : undefined}
                    />
                ))}
            </Menu>
        </Main>
    )
}

const RowMain = styled.div`
    width: 100%;
    position: relative;
    color: white;
`
const RowHeaderWrapper = styled.div`
    height: 70px;
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
    height: ${(props) => (props.isActive ? props.amountOfRows * 150 + 'px' : '0px')};
    /* border: 1px solid blue; */
    transition: height 300ms ease-in;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
`
const ShortCutBox = styled.div`
    width: 35px;
    height: 35px;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    font-size: 15px;
    border-radius: 10px;
`
const Title = styled.span`
    font-size: 19px;
`
const NodeMain = styled.div`
    width: 150px;
    height: 150px;
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
    width: 60px;
    height: 60px;
    border-radius: 16px;
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
    font-size: 25px;
`
const NodeText = styled.span`
    font-size: 18px;
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
            <RowHeaderWrapper isActive={isActive}>
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
