import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx'; 
import Web from './pages/Web.jsx';
import Home from './pages/home.jsx';

const router = createBrowserRouter([
  {
    path: '/App',
    element: <App />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Dashboard',
    element: <Dashboard />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Web',
    element: <Web />,
  },
  {
    path: '/Home',
    element: <Home />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
