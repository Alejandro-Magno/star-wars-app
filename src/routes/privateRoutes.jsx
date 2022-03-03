import { Navigate } from "react-router-dom";
import { useEffect,useState,Suspense } from "react";
import axios from "axios";

import CryptoJS from "crypto-js";
const PrivateRoute = function ({ children }) {
  let token = window.localStorage.getItem("token");
  const [auth,setAuth] =useState()
  const KEY = "Star*Wars*SWAPI*-Test/2022-02-28";
  let decryp =''

 if(token){
  decryp = CryptoJS.AES.decrypt(token, KEY).toString(CryptoJS.enc.Utf8);
 }
   
 
  return decryp.length > 0 ? children : <Navigate to="/" />;
  //return children
};

export const PublicRoute = function ({ children }) {
  let auth = true;

  switch (auth) {
    case "true":
      return <Navigate to="/listaView" />;

    default:
      return children;
  }
};

export default PrivateRoute;
