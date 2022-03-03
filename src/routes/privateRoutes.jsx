import { Navigate } from "react-router-dom";

import CryptoJS from "crypto-js";
const PrivateRoute = function ({ children }) {
  let token = window.localStorage.getItem("token");

  const KEY = "Star*Wars*SWAPI*-Test/2022-02-28";
  let decryp =''

 if(token){
  decryp = CryptoJS.AES.decrypt(token, KEY).toString(CryptoJS.enc.Utf8);
 }
   
 
  return decryp.length > 0 ? children : <Navigate to="/" />;
  //return children
};



export const PublicRoute = function ({ children }) {
  let token = window.localStorage.getItem("token");

  const KEY = "Star*Wars*SWAPI*-Test/2022-02-28";
  let decryp = "";

  if (token) {
    decryp = CryptoJS.AES.decrypt(token, KEY).toString(CryptoJS.enc.Utf8);
  }

  return decryp.length > 0 ? <Navigate to="listaView" /> : children;
  //return children
};


export default PrivateRoute;
