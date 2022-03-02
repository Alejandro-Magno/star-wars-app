import React from 'react'
import MenuStyle from '../../styles/common/menuStyle'
import Burguer from "../../assets/images/burger.png";
import Logo from "../../assets/images/logo.png";
export default function Header() {
  return (
    <MenuStyle className="header">
      <img className="header-logo" src={Logo} alt="" />
      <img className="header-burguer" src={Burguer} alt="" />
    </MenuStyle>
  );
}
