import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Lib
import menuData from './lib/menuData.json'
import getShortText from './lib/getShortText'

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
    border: 1px solid #333333;
    overflow: hidden;
    width: 450px;
    /* height: 600px; */
    border-radius: 6px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    box-shadow: -23px 18px 33px -5px rgba(0, 0, 0, 0.7);
`

const App = (props) => {
    // States
    const [activeItem, setActiveItem] = useState(-1)
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
    transition: background-color 100ms ease-in;
    cursor: pointer;
`
const RowContent = styled.div`
    width: 100%;
    height: ${(props) => (props.isActive ? '100px' : '0px')};
    /* border: 1px solid blue; */
    transition: height 300ms ease-in;
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
    font-size: 18px;
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
                <ShortCutBox>{getShortText(props.title)}</ShortCutBox>
                <Title>{props.title}</Title>
            </RowHeaderWrapper>
            <RowContent isActive={isActive}></RowContent>
        </RowMain>
    )
}

export default App
