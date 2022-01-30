import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { getCar } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(getCar);
  console.log(cars);
  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='tesla' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href='#'>
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(!burgerStatus)} />
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(!burgerStatus)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => {
            return (
              <li>
                <a key={index} href='#'>
                  {car}
                </a>
              </li>
            );
          })}
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-In</a>
        </li>
        <li>
          <a href='#'>CyberTruck</a>
        </li>
        <li>
          <a href='#'>Roadaster</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
      </BurgerMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;
const Menu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)``;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: start;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 200ms ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
