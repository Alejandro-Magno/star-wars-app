import React,{lazy,Suspense} from "react";

import { Routes, Route } from "react-router-dom";

import DetailView from "../components/views/detailsView";
import ListaView from "../components/views/listaView";
import SetPrivate, { PublicRoute } from "./privateRoutes";
import Login2 from '../components/views/login'
import Grafico from '../components/views/grafico'


let rutas = ()=> {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Login2 />
          </PublicRoute>
        }
      />

      <Route
        path="listaView"
        element={
          <SetPrivate>
            <ListaView />
          </SetPrivate>
        }
      ></Route>

      <Route
        path="/detailView/:id"
        element={
          <SetPrivate>
            <DetailView />
          </SetPrivate>
        }
      />

      <Route
        path="grafico"
        element={
          <SetPrivate>
            <Grafico />
          </SetPrivate>
        }
      />

      <Route path="*" element={"Que haces aqui"} />
    </Routes>
  );
}

export default rutas