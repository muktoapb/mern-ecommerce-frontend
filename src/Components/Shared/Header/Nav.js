import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";
const Nav = () => {
    const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <HeaderMain>
        <div className="container d-flex">
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <NavArea>
            <nav className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </NavArea>
        <MiniCart>
            <MdShoppingCart></MdShoppingCart>
            <span className="icon">
                {cartCount}
            </span>
        </MiniCart>
        </div>
      </HeaderMain>
    </>
  );
};

export default Nav;

const HeaderMain = styled.div`
    padding: 20px 0;
    .container{
        align-items: center;
        justify-content: space-between;
    }
`;
const Logo = styled.div``;
const NavArea = styled.div`
    ul{
        justify-content: center;
        list-style: none;
        display: flex;
        gap: 0px 25px;
        li{
            a{
                color: #000;
            }
            &:hover{
                a{
                    color:#DE006E;
                }
            }
        }
    }
`;
const MiniCart = styled.div`
    cursor: pointer;
    font-size: 25px;
    display: flex;
    align-items: center;
    .icon{
        font-size: 16px;
        background-color: #ED392D;
        color: #fff;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        display: inline-block;
        text-align: center;
        line-height: 20px;
    }
`;
