import React from 'react'
import styled from 'styled-components'

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
    height: 600px;
    border-radius: 6px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    box-shadow: -23px 18px 33px -5px rgba(0, 0, 0, 0.7);
`

const App = () => {
    return (
        <Main>
            <MenuButton />
            <Menu />
        </Main>
    )
}

export default App
