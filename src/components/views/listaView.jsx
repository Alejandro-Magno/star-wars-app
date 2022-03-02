import React, { useState, useEffect } from "react";
import ListaView from "../../styles/listView/listViewStyle";
import axios from "axios";
import Header from "../common/header";
import { getUser, getMovies } from "../../store/user/actions";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    USER: state.userReducer.USER,
    FILMS: state.userReducer.FILMS,
  };
};
function VistaView({ getUser, USER, FILMS,getMovies }) {
  //console.log("USER", USER);
 // console.log("FILM", FILMS);
  useEffect( () => {

    if(USER==false){

       getUser(3)

    }else{
      getMovies(USER)
     

    }
   
  }, [USER]);


  function Movie() {
  
   // console.log(FILMS);
  

     FILMS.map((obj)=>{
       
       return <h1>Hola</h1>
     })
  }
 
  return (
    <ListaView>
      <Header />
      <div className="container">
        <div className="Membrete">
          <span
            onClick={() => {
              console.log(FILMS);
            }}
          >
            {USER.name}
          </span>
          <span>ee</span>
        </div>
        <div className="list">
          <p>MOVIES:</p>
          <ul>
            <Movie/>
          </ul>
        </div>
      </div>
    </ListaView>
  );
}

export default connect(mapStateToProps, { getUser,getMovies })(VistaView);
