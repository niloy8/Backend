import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import User from './Components/User.jsx';
import Update from './Components/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <User></User>,
    loader: () => fetch('https://coffe-server-roan.vercel.app/users')
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({ params }) => fetch(`https://coffe-server-roan.vercel.app/users/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
