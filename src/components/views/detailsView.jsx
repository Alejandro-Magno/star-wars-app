import React, { useState, useEffect, useLayoutEffect } from "react";
import ListaView, {
  DetailView,
  Grafico,
} from "../../styles/listView/listViewStyle";
import axios from "axios";
import Header from "../common/header";
import { getUser, getMovies, getPersonajes } from "../../store/user/actions";
import { connect } from "react-redux";
import MultiRender from "../functions/multiRender";
import { useParams, useNavigate } from "react-router-dom";
import Grafica from "./grafico";
import getDay from "../functions/getDay";
const mapStateToProps = (state) => {
  return {
    USER: state.userReducer.USER,
    FILMS: state.userReducer.FILMS,
    CHARACTERS: state.userReducer.CHARACTERS,
  };
};
function DetailViewMov({ USER, FILMS, getPersonajes, CHARACTERS }) {
  const [scoresGrafica, setScoresGrafica] = useState();

  const navigate = useNavigate();

  const params = useParams();
  let movie = FILMS[params.id];

  useEffect(() => {
    if (FILMS == false) {
      navigate("/listaView");
    } else {
      let personajes = FILMS[params.id].characters;
      getPersonajes(personajes);

      let scores = getDataSet();
      setScoresGrafica(scores);
    }
  }, [FILMS]);

  function getDataSet() {
    let dia = getDay();
    //console.log('DIA: ',dia)
    let scores = [[0], [0], [0], [0], [0], [0], [0]];

    let insertIn = dia - 1;

    let LocalStorageItem = window.localStorage.getItem(USER.name);
    let obj = JSON.parse(LocalStorageItem);
    //console.log('USER: ',obj)

    let diaC = obj[dia]; // LAs veces que he acedido a este componente hoy
    let accesoHoy = diaC[0];
    //console.log(diaC)

    //console.log(diaC[params.id])

    //console.log('PARAM:',params)

    for (let index = 0; index <= 7; index++) {
      let accesoHoy = obj[index];

      if (accesoHoy) {
        //Aqui accedo a todos los dias
        if (accesoHoy[params.id]) {
          //Aqui a los dias que nada mas existen datos
          let acc = accesoHoy[params.id];

          scores[index] = acc;
          console.log(acc);

          //console.log(`El dia ${index} has accedido a esta pelicula ${acc} veces`)
          //console.log("DIA " + index, accesoHoy);
        }
      }
    }

    return scores;
  }

  function Movies() {
    function TR(props) {
      const [home, setHome] = useState();
      useEffect(() => {
        const getPlaneta = async () => {
          const req = await axios.get(C.homeworld);
          setHome(req.data.name);
        };

        getPlaneta();
      }, []);
      let C = CHARACTERS[props.id];

      return (
        <tr>
          <td data-label="Nombre">{C.name}</td>
          <td data-label="Homeworld">{home || "cargando..."}</td>
          <td data-label="Haricolor">{C.hair_color}</td>
          <td data-label="Height">{C.height}</td>
        </tr>
      );
    }

    return (
      <>
        <div id={params.id} className="Movie">
          <div>
            <table>
              <thead>
                <tr>
                  <th scope="col">NOMBRE</th>
                  <th scope="col">HOMEWORLD </th>
                  <th scope="col">HAIRCOLOR </th>
                  <th scope="col">HEIGHT</th>
                </tr>
              </thead>
              <tbody>
                <MultiRender repeticiones={CHARACTERS.length} Component={TR} />
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
    <Header />
      {FILMS.length > 0 ? (
        <DetailView>
          <div className="container">
            <div className="Header">
              <div className="headers--titles">
                <h2 onClick={getDataSet}>Pelicula: {movie.title}</h2>
                <h2>Director: {movie.director}</h2>
                <h3>Producers:{movie.producer}</h3>
              </div>
              <div className="header--content">
                <h3>Opening Crawl</h3>
                <p>{movie.opening_crawl}</p>
              </div>
            </div>

            <div className="Table--container">
              <h2>Personajes</h2>
              <Movies />
            </div>

            <footer>
              <h2>Visitas semanales a esta pelicula</h2>
              <Grafico>
                {scoresGrafica ? <Grafica Score={scoresGrafica} /> : <></>}
              </Grafico>
            </footer>
          </div>
        </DetailView>
      ) : (
        <h1>CARGANDO...</h1>
      )}
    </>
  );
}

export default connect(mapStateToProps, { getUser, getMovies, getPersonajes })(
  DetailViewMov
);
