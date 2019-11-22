import React from 'react';
import styled from 'styled-components';
import logo from '../../static/ak9.png';
import { Link } from 'gatsby';
import Avatar from './avatar';
import Navigation from './navigation';

const Body = styled.div`

justify-content: center;
background: #292929;
  width: 100%;
  height: 625px;
  
  
`;
const Title = styled.div`
text-align: center;
padding-top:15px;
padding-bottom:15px;
font-size: 2em;
color: #ff9933;
`
/* const Logolayot = styled.div`
display: inline-flex;
align-items: center;
flex-grow: 1;
justify-content: flex-start;
`;
 */

const Avatarlayot = styled.div`
display: inline-flex;
align-items: center;
width: '20px';
height: '20px';;
`;

export default ()=>(
    <Body>
        {/* <Logolayot>
        <Link to="/">
  <img src={logo} style={{ width: '75px', height: '75px' }} />
  </Link>
  </Logolayot> */}
        <Title>AKON IX</Title>
            <Avatar/>
            <Navigation/>
       
            
    </Body>
)