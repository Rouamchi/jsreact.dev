import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Spécialités from './pages/Spécialités';
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
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
