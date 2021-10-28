import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

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
            <BurgerNav>
                <CloseWrapper>
                    <CustomClose />
                </CloseWrapper>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Investor Relations</a></li>
            </BurgerNav>
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
    z-index: 1;
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
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 10
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        
        a {
            font-weight: 600;
        }
    }
`
const CustomClose = styled(CloseIcon)``

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`