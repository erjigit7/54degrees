import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  return (
    <Menu right width={'300px'}>
      <a className="menu-item" href="/">Главная</a>
      <a className="menu-item" href="/about">О нас</a>
      <a className="menu-item" href="/contact">Контакты</a>
    </Menu>
  );
};

export default BurgerMenu;
