import styled from "styled-components";

const Menu = styled.div`
  position: fixed;
  background-color: #9c9c9c16;
  display: flex;
  width: 100vw;
  z-index: 9999;

  justify-content: space-between;
  padding: 10px;
  top: 0;

  img {
    max-width: 40px;
    cursor: pointer;
  }

 
`;

export default Menu;
