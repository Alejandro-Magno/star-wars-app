import { Routes, Route } from "react-router-dom";

import DetailView from "../components/views/detailsView";
import ListaView from "../components/views/listaView";
import SetPrivate, { PublicRoute } from "./privateRoutes";
import Login2 from '../components/views/login2'


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
        path="/detailView"
        element={
          <SetPrivate>
            <DetailView />
          </SetPrivate>
        }
      />
      <Route path="*" element={"Que haces aqui"} />
    </Routes>
  );
}

export default rutas