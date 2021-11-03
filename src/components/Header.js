import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import './textdecoration.css';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt='' />
            </a>
            <Menu>
                <p><a href='#' class='textdecoration'>Model S</a></p>
                <p><a href='#' class='textdecoration'>Model 3</a></p>
                <p><a href='#' class='textdecoration'>Model X</a></p>
                <p><a href='#' class='textdecoration'>Model Y</a></p>
                <p><a href='#' class='textdecoration'>Solar Roof</a></p>
                <p><a href='#' class='textdecoration'>Solar Panels</a></p>
            </Menu>
            <RightMenu>
                <p><a href='#' class='textdecoration'>Shop</a></p>
                <p><a href='#' class='textdecoration'>Account</a></p>
                <p><a href='#' onClick={()=>setBurgerStatus(true)} class='textdecoration'>Menu</a></p>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href='#' class='textdecoration'>Existing Inventory</a></li>
                <li><a href='#' class='textdecoration'>Used Inventory</a></li>
                <li><a href='#' class='textdecoration'>Trade-In</a></li>
                <li><a href='#' class='textdecoration'>Test Drive</a></li>
                <li><a href='#' class='textdecoration'>Cybertruck</a></li>
                <li><a href='#' class='textdecoration'>Roadster</a></li>
                <li><a href='#' class='textdecoration'>Semi</a></li>
                <li><a href='#' class='textdecoration'>Charging</a></li>
                <li><a href='#' class='textdecoration'>Powerwall</a></li>
                <li><a href='#' class='textdecoration'>Commercial Energy</a></li>
                <li><a href='#' class='textdecoration'>Utilities</a></li>
                <li><a href='#' class='textdecoration'>Find Us</a></li>
                <li><a href='#' class='textdecoration'>Support</a></li>
                <li><a href='#' class='textdecoration'>Investor Relations</a></li>
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s;

    li {
        padding: 14px 0 8px 25px;    
        list-style: none;
        
        a {
            font-weight: 600;
        }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    margin-top: 10px;
    margin-right: 20px;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
