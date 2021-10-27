import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt='' />
            </a>
            <Menu>
                <p><a href='#'>Model S</a></p>
                <p><a href='#'>Model 3</a></p>
                <p><a href='#'>Model X</a></p>
                <p><a href='#'>Model Y</a></p>
                <p><a href='#'>Solar Roof</a></p>
                <p><a href='#'>Solar Panels</a></p>
            </Menu>
            <RightMenu>
                <p><a href='#'>Shop</a></p>
                <p><a href='#'>Account</a></p>
                <p><a href='#'>Menu</a></p>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    left: 0;
    right: 0; 
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    transform: translateX(60px);

    a {
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`

const RightMenu = styled.div`  
    display: flex;
    
    a {
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`