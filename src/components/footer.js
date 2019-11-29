import React from 'react';
import styled from 'styled-components';



const Footer = styled.footer`
background: #292929;
width: 100%;
height: auto;
justify-content: center;
display: flex;
flex-wrap: wrap;
color: grey;
`
const ContextBar = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
margin-bottom: 5px;
width: 100%
`


export default () => (
    <Footer>
        <ContextBar>
        <a href="https://www.facebook.com/yeentrp"  target="_blank">
            <img src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="facebook" style={{"width": "40px","height": "40px","margin-right":"70px"} }/>
        </a>
        <a href="https://www.instagram.com/akoniixx/"  target="_blank">
            <img src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="ig" style={{"width": "40px","height": "40px,","margin-right":"70px"} }/>
        </a>
        <a href="https://github.com/akoniixx"  target="_blank">
            <img src="https://image.flaticon.com/icons/svg/38/38401.svg" alt="github" style={{"width": "40px","height": "40px","margin-right":"70px"} }/>
        </a>
        <a href="https://www.linkedin.com/in/alongkon-insuwan-356360b1/"  target="_blank">
            <img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="linkin"style={{"width": "40px",height: "40px"} }/>
        </a>
        </ContextBar>
        <ContextBar>
        © 2019 Alongkon Insuwan. All rights reserved.
        </ContextBar>
        

    </Footer>

)