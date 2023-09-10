import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Empleado from './pages/Empleado';
import RRHH from './pages/RRHH';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Login/>,
  },
  {
    path: "empleados",
    element: <Empleado />,
  },
  {
    path: "rrhh",
    element: <RRHH />,
  },
  {
    path: "cuenta",
    element: <Empleado />,
  },
  {
    path: "vacaciones",
    element: <Empleado />,
  },
  {
    path: "pryectos",
    element: <Empleado />,
  },
  {
    path: "propuestas",
    element: <Empleado />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
