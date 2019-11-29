import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const NavItem = styled.div`
display: flex;
font-size: 1.25em;
justify-content: center
`;


export const Item = styled.div`
display: flex;
  align-items: center;
  margin: 0 1em;
   a:-webkit-any-link {
    color: #ff9933;
    text-decoration: none;
    cursor: pointer;
} 
`;




export default () => (
  
    <NavItem>

    {/* <NavItem>
      <Link to="/">Home</Link>
    </NavItem> */}
    <Item>
      <Link to="/blog/">Blog</Link>
    </Item>
    <Item>
      <Link to="/about">Profile</Link>
    </Item>
    <Item>
      <Link to="/contact">Contact me</Link>
    </Item>
    </NavItem>
 
)
