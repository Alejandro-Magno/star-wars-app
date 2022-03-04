import React, { useState, useEffect } from "react";
import ListaView from "../../styles/listView/listViewStyle";
import axios from "axios";
import Header from "../common/header";
import { getUser, getMovies } from "../../store/user/actions";
import { connect } from "react-redux";
import MultiRender from "../functions/multiRender";
import { useNavigate } from "react-router-dom";
import getDay from '../functions/getDay'
import { DateTime } from "luxon";
const mapStateToProps = (state) => {
  return {
    USER: state.userReducer.USER,
    FILMS: state.userReducer.FILMS,
  
  };
};
function VistaView({ getUser, USER, FILMS, getMovies }) {

  const [mov, setMov] = useState();
  const navigate = useNavigate();

  console.log(FILMS)
  useEffect(() => {
    if (USER == false) {
      getUser();
    } else {
      getMovies(USER);
    }
  }, [USER]);
  


  function dataSet(id) {
    

   
   let dia = getDay();
    //let dia = getDay();
   // console.log('DIA: ', dia)
   //Si se testean los dias procurar deshabilitar el redireccionamiento
     const week = DateTime.now().weekNumber;
 
 
  
    let LocalStorageItem = window.localStorage.getItem(USER.name);
 
    let movObj = {
        [dia]:{[id]:1},
        Week:week

    }
  
  

    if (LocalStorageItem) {
    
     
   
     let obj = JSON.parse(LocalStorageItem);
      
    

      if(obj.Week === week){//Esta condicion es para resetear el localStorage si la semana guardada no es igual a la actual

       
          try {
            if (obj[dia][id]) {
              obj[dia][id] = parseInt(parseInt(obj[dia][id]) + 1);
              window.localStorage.setItem(USER.name, JSON.stringify(obj));
            } else {
              let separate = obj[dia];
              let separateObj = {
                ...separate,
                [id]: 1,
              };
              let obj2 = {
                ...obj,
                [dia]: separateObj,
              };

              window.localStorage.setItem(USER.name, JSON.stringify(obj2));
            }
          } catch (error) {
            let obj = JSON.parse(LocalStorageItem);
            let obj2 = {
              ...obj,
              [dia]: { [id]: 0 },
            };

            if (obj2[dia][id]) {
              obj2[dia][id] = parseInt(parseInt(obj2[dia][id]) + 1);
              window.localStorage.setItem(USER.name, JSON.stringify(obj2));
            } else {
              let separate = obj2[dia];
              let separateObj = {
                ...separate,
                [id]: 1,
              };
              let obj3 = {
                ...obj,
                [dia]: separateObj,
              };

              window.localStorage.setItem(USER.name, JSON.stringify(obj3));
            }

          
          }

      }else{
    
         window.localStorage.setItem(USER.name, JSON.stringify(movObj));
      }
    
     

    }else{
     

      window.localStorage.setItem(USER.name, JSON.stringify(movObj));
    }

   

  }

  function Movies(props) {


  
   
    let movie = FILMS[props.id];

    return (
      <>
        <div
          onClick={() => {
          // console.log("id enviado", props.id);
            dataSet(props.id);
           navigate(`/detailView/${props.id}`);
          }}
          id={props.id}
          className="Movie"
        >
          <div className="Membrete">
            <h3
              
             
            >
              {movie.title}
            </h3>
            <span>{mov}</span>
          </div>

          <div className="details">
            <h4 className="details--director">
              Director: <span>{movie.director}</span>
            </h4>
            <div className="details-body">
              <h4>OPENING CRAW</h4>
              <p>{movie.opening_crawl}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
       <Header /> 
    <ListaView>
      <div className="container">
        <div className="Header">
          <div
         
          >
            <h2>User: {USER.name}</h2>
          </div>
        </div>

        <div className="Movie--container">
          <MultiRender repeticiones={FILMS.length} Component={Movies} />
        </div>
      </div>
    </ListaView>
      </>
  );
}

export default connect(mapStateToProps, { getUser, getMovies })(VistaView);
