import React from 'react';
// import './Head.css'
import { MdPersonOutline, MdOutlineSettings, MdOutlineFavoriteBorder } from "react-icons/md";
import styled from 'styled-components'

const Head = () => {
    return (
        <>
            <HeaderTop>
                <div className="container d-flex">
                    <ContactList>
                       <span>Contact us - <a href="tel:+00221225123-30">00 221 225 123-30</a> or <a href="mailto:info@domain.com">info@domain.com</a></span>
                    </ContactList>
                    <IconLinks>
                        <li><a href="#"><MdPersonOutline/>   <span>Login</span></a></li>
                        <li><a href="#"><MdOutlineSettings/>   <span>Register</span></a></li>
                        <li><a href="#"><MdOutlineFavoriteBorder/>   <span>Wishlist</span></a></li>
                    </IconLinks>
                </div>
            </HeaderTop>
        </>
    );
};

export default Head;

const HeaderTop = styled.div`
    background: rgb(20, 19, 19);
    padding: 10px 0px;
    font-size: 14px;
    a{
        color: #fff;
    }
    .container{
        align-items: center;
    }
`;
const ContactList = styled.div`
    color: #fff;
    a{
        font-style: italic;
    }
`;
const IconLinks = styled.ul`
    display: flex;
    align-items: center;
    li {
        display: inline-block;
        padding: 0 10px;
        a {
            display: flex;
            color: #fff;
            align-items: center;
            svg{
                font-size: 20px;
            }
            span{
                display: inline-block;
                padding-left: 10px;
            }
        }
    }
`;