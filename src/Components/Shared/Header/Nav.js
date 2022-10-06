import React from 'react';
import styled from 'styled-components';
const Nav = () => {
    return (
        <>
            <HeaderMain>
                <Logo>
                    <img src= alt="" />
                </Logo>
                <NavArea></NavArea>
                <MiniCart></MiniCart>
            </HeaderMain>
        </>
    );
};

export default Nav;

const HeaderMain = styled.div``;
const Logo = styled.div``;
const NavArea = styled.div``;
const MiniCart = styled.div``;