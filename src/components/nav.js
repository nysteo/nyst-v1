import React from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {navLinks } from '../config.js'

const StyledHeader = styled.header`

`;

const StyledNav = styled.nav`
position: -webkit-sticky;
position: sticky;
top: 0px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
margin-right: auto;
margin-left: auto;
padding-top: 16px;
padding-bottom: 16px;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
background-color: #0a192e;
font-family: Sfmono, sans-serif;
color: #fff;
font-size: 17px;


`;
const NavContent = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
padding-bottom: 0px;
-webkit-box-pack: justify;
-webkit-justify-content: space-between;
-ms-flex-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-flex: 1;
-webkit-flex: 1;
-ms-flex: 1;
flex: 1;
`;


const NavLink = styled.li`
padding: 9px 24px;
color: #f7f7f7;
font-size: 14px;
line-height: 24px;
font-weight: 400;
letter-spacing: 0.25px;

`;

const nav = () => {
    return (
        <StyledHeader>
            <StyledNav>
                    <NavContent>
                            {navLinks.map(({url, name}, index) => (
                                <NavLink><Link>{index + 1}.{name}</Link></NavLink>
                            ))}
                    </NavContent>
            </StyledNav> 
        </StyledHeader>
    )
}

export default nav
