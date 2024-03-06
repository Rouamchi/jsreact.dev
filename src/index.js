import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Spécialités from './pages/Spécialités';
import ConseilDeGestion from './pages/ConseilDeGestion.js';
import EtudeDeFaisabilité from './pages/EtudeDeFaisabilité.js';
import ElaborationDuBusinessPlan from './pages/ElaborationDuBusinessPlan.js';
import Domiciliation from './pages/Domiciliation.js';
import Formations from './pages/Formations';
import Contact from './pages/Contact';
import SalleDeFormation from './pages/SalleDeFormation';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Sorry, Page not found</h1>
  },
  {
    path: "/accueil",
    element: <Accueil/>,
  },
  {
    path: "/salleDeFormation",
    element: <SalleDeFormation/>,
  },
  {
    path: "/spécialités",
    element: <Spécialités/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },

  {
    path: "/conseilDeGestion",
    element: <ConseilDeGestion/>,
  },
  {
    path: "/etudeDeFaisabilité",
    element: <EtudeDeFaisabilité/>,
  },
  {
    path: "/elaborationDuBusinessPlan",
    element: <ElaborationDuBusinessPlan/>,
  },
  {
    path: "/domiciliation",
    element: <Domiciliation/>,
  },
  {
    path: "/formations",
    element: <Formations/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
