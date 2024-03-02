import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Spécialités from './pages/Spécialités';
import Psychiatre from './pages/Psychiatre';
import Psychothérapeute from './pages/Psychothérapeute';
import Addictiologue from './pages/Addictiologue';
import Sexologue from './pages/Sexologue';
import GerontoPsychiatrie from './pages/GerontoPsychiatrie';
import Contact from './pages/Contact';
import Cabinet from './pages/Cabinet';


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
    path: "/cabinet",
    element: <Cabinet/>,
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
    path: "/psychiatre",
    element: <Psychiatre/>,
  },
  {
    path: "/psychothérapeute",
    element: <Psychothérapeute/>,
  },
  {
    path: "/addictiologue",
    element: <Addictiologue/>,
  },
  {
    path: "/sexologue",
    element: <Sexologue/>,
  },
  {
    path: "/gerontoPsychiatrie",
    element: <GerontoPsychiatrie/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
