import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Products from './components/Products';
import AddUsers from './components/AddUsers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/products',
    loader: () => fetch('http://localhost:5000/products'),
    element: <Products></Products>
  },
  {
    path: '/users',
    // loader: () => fetch('http://localhost:5000/users'),
    element: <AddUsers></AddUsers>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
