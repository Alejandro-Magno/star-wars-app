import styled from "styled-components";

const ListaView = styled.div`
  display: flex;
  background-color: #000000;
  height: 100vh;
  position: relative;
  justify-content: center;
  align-items: center;
  
  .container {
  }
  

  .list {
    
    background-color: white;
    width: 80vw;
    height: 70vh;
   
  }
  .Membrete{
      display: flex;
      background-color: red;
      justify-content: space-between;
      padding: 10px;
  }
  span{
      color:white;
  }
`;

export default ListaView;
