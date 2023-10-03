import React, { lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
// import Users from "./pages/Users";
const Dashboard = lazy(() => import("./pages/dashboard"));
import Layout from "./layout/Layout";
import Login from "./pages/auth/Login";
import Error from "./pages/404";
import { useAuthStore } from "./helpers/useAuthStore";
import { Categories, Users, Unidades, Materials, Solicitudes, Sucursales, Stock, Personas, StockSucursal } from "./pages";
import Loading from "@/components/Loading";

function App() {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') {
    return (
      <Loading></Loading>
    )
  }

  return (
    <main className="App  relative">
      <Routes>
        {
          (status === 'not-authenticated')
            ? (
              <>
                {/* Login */}
                <Route path="/auth/login" element={<Login />} />
                <Route path="/*" element={<Navigate to="/auth/login" />} />
              </>
            )
            : (
              <>
                <Route path="/" element={<Navigate to="/estudiantes" />} />

                <Route path="/*" element={<Layout />}>
                  <Route path="estudiantes" element={<Materials />} />
                  <Route path="*" element={<Navigate to="/404" />} />

                  {/* Nuevas Rutas */}
                  {/* <Route path="solicitudes" element={<Solicitudes />} /> */}
                  <Route path="docentes" element={<Categories />} />
                  <Route path="materias" element={<Unidades />} />
                  <Route path="estudiantes" element={<Materials />} />
                  <Route path="usuarios" element={<Users />} />
                  {/* <Route path="sucursales" element={<Sucursales />} />
                  <Route path="stock" element={<Stock />} />
                  <Route path="stock-sucursal" element={<StockSucursal />} /> */}
                  <Route path="personas" element={<Personas />} />
                </Route>

                <Route path="/404" element={<Error />} />
              </>
            )
        }
      </Routes>
    </main>
  );
}

export default App;
