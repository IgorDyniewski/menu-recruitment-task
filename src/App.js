import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Lib
import menuData from './lib/menuData.json'

// Styled components
const Main = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-color: #131313; */
    background-image: url('/appScreenshot.png');
    background-size: contain;
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
    width: 400px;
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
    height: 50px;
    width: 100%;
    display: block;
    position: relative;
`
const RowContent = styled.div`
    width: 100%;
    height: ${(props) => (props.isActive ? '100px' : '0px')};
    /* border: 1px solid blue; */
    transition: height 300ms ease-in;
`

const Row = (props) => {
    // States
    const [isActive, setIsActive] = useState(props.isActive)

    useEffect(() => {
        setIsActive(props.isActive)
    }, [props.isActive])

    return (
        <RowMain onClick={() => props.onClick()}>
            <RowHeaderWrapper>{props.title}</RowHeaderWrapper>
            <RowContent isActive={isActive}></RowContent>
        </RowMain>
    )
}

export default App
