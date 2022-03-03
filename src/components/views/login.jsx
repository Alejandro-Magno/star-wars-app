import React, { useEffect, useRef, useState } from "react";
import { Login } from "../../styles/Login/loginViewStyle";
import Logo from "../../assets/images/logo.png";

import CryptoJS from "crypto-js";

import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { getUser, getUserlist } from "../../store/user/actions";
import Multirender from "../functions/multiRender";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const mapStateToProps = (state) => {
  return {
    USER: state.userReducer.USER,
    USERLIST: state.userReducer.USERLIST,
  };
};
function LoginC({ USER, USERLIST, getUserlist, getUser }) {
  const KEY = "Star*Wars*SWAPI*-Test/2022-02-28";
  const value = useRef();
  const indiceArr = useRef();
  
  const navigate = useNavigate()
  
  useEffect(() => {
    getUserlist();
  }, []);

  function AES(message) {
  

    let result = CryptoJS.AES.encrypt(message, KEY);
    alert('Contraseña en la consola')
    console.log("PASSWORD-ENCRYPTED: " + result);

   
  }

  function Options(props) {
    let { characters, res } = USERLIST;

    //console.log(res[props.id]);
    return (
      <option id={props.id} value={characters[props.id] || "cargando..."}>
        {characters[props.id] || "cargando..."}
      </option>
    );
  }

  function getPosition(name) {
  
    let indice;
    let arr = USERLIST.res;
    arr.map((obj, i) => {
      
      // console.log(obj)
      if (obj.name === name) {
        indice = i;
      }
    });

    indiceArr.current = indice;
   
  }

  function validatePasword(pass) {

    let decryp = CryptoJS.AES.decrypt(pass, KEY).toString(CryptoJS.enc.Utf8);
    let m = window.localStorage.getItem("m");
    let intentos = window.localStorage.getItem("intentos");
    let status = window.localStorage.getItem("status");
    let minutosActuales = moment().minute();
    if (intentos && status == undefined) {
      window.localStorage.setItem("intentos", parseInt(intentos) + 1);
      let i = window.localStorage.getItem("intentos");

  

      if (window.localStorage.getItem("intentos") >= 3) {
        window.localStorage.setItem("m", moment().add(1, "m").minute());
        let time = moment().add(1, "m").format("MMMM Do YYYY, h:mm:ss a");
        window.localStorage.setItem("status", "bloqueado");
        alert(`Has sido bloquedo hasta ${time}`);
      }
    } else {
      window.localStorage.setItem("intentos", 1);
    }

    if (m) {
      if (minutosActuales >= m) {
        console.log("Los minutos coinciden");
        window.localStorage.removeItem("m");
        if (decryp) {
          console.log("Puedes entrar");
        } else {
          console.log("Tienes 3 intentos mas");
          window.localStorage.removeItem("status");
          window.localStorage.setItem("intentos", 1);
        }
      } else {
        console.log("Has sido bloqueado");
        window.localStorage.setItem("status", "bloqueado");
      }
    } else {
      if (decryp) {
         window.localStorage.setItem("token", pass);
         window.localStorage.setItem("USER", indiceArr.current+1);
         window.localStorage.removeItem("intentos")
         window.localStorage.removeItem("m");
         window.localStorage.removeItem("status");
         navigate('/listaView')
       
      } else {
         if (!window.localStorage.getItem("status")) {
          
           alert("Contraseña incorrecta, luego de 3 intentos seras bloqueado");
         } 
      }
    }
  }

  return (
    <Login>
      <div className="cover">
        <div className="login">
          <div className="login__form">
            <div className="login__form-logo">
              <img src={Logo} alt="" />
              <h2>FORCE</h2>
            </div>

            <div className="login__form-inputs">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  if (e.target.value != "SELECCIONA") {
                    getPosition(e.target.value);
                 
                     let haircolor = USERLIST.res[indiceArr.current].hair_color;

                     if (haircolor === "n/a") {
                       haircolor = USERLIST.res[indiceArr.current].eye_color;
                     }
                     //console.log(haircolor);

                     AES(haircolor);
                  }
                }}
              >
                <option value="SELECCIONA">SELECCIONA</option>

                {USERLIST.characters ? (
                  <Multirender
                    repeticiones={USERLIST.characters.length}
                    Component={Options}
                  />
                ) : (
                  ""
                )}
              </select>

              <input
                
                onChange={(e) => {
                  value.current = e.target.value;
                }}
                placeholder="PASSWORD"
                type="password"
                disabled={indiceArr?false:true}
              />
            <button
                onClick={() => {
                  validatePasword(value.current);
                }}
                className=""
              >
                LOG IN
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </Login>
  );
}

export default connect(mapStateToProps, { getUserlist, getUser })(LoginC);
