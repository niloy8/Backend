import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:3000/coffe')
  },
  {
    path: "/addcoffe",
    element: <AddCoffe></AddCoffe>
  },
  {
    path: "/updatecoffe/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader: ({ params }) => fetch(`http://localhost:3000/coffe/${params.id}`)
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
