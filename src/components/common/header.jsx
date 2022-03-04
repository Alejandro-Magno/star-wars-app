import React,{useState} from 'react'
import MenuStyle from '../../styles/common/menuStyle'
import Burguer from "../../assets/images/burger.png";
import Logo from "../../assets/images/logo.png";
import styled from 'styled-components';


const Burguertab = styled.div`
  margin-right: 30px;
  position: relative;
  
  .close {
    z-index:2!important;
    position: absolute;
    background-color: white;
    color: black;
    list-style: none;
    height: 100px;
    width: 200px;
    right: 4px;
    margin-top: 10px;

    background-color: #252525;
    border-radius: 3px;
    margin-left: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: OCRS;
    color: white;
    text-transform: uppercase;
 
  }
  span {
    cursor: pointer;
    :hover {
      color: wheat;
    }
  }
  .vineta {
    background-color: #252525;
    display: block;
    margin-left: 4px;
    border-radius: 2px;

    width: 20px;
    margin-top: 2px;
    height: 20px;
    position: absolute;
    transform: rotate(45deg);
  }
`;
export default function Header() {
   
  const [toggle,setToggle] =useState(false);

 

  return (
    <MenuStyle className="header">
      <img className="header-logo" src={Logo} alt="" />
      <Burguertab className="Burguer">
        <img
          onClick={() => {
            setToggle(!toggle);
          }}
          className="header-burguer"
          src={Burguer}
          alt=""
        />
        {toggle ? (
          <div>
            <li className="vineta"></li>
            <li className="close">
              <span onClick={()=>{
                window.localStorage.removeItem('token')
                window.localStorage.removeItem("USER");

              
                window.location.href = "/";
              }} >cerrar</span>
            </li>
          </div>
        ) : (
          ""
        )}
      </Burguertab>
    </MenuStyle>
  );
}
