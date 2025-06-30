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
import Header from './Components/Header.jsx';
import Signin from './Components/Signin.jsx';
import Provider from './Providers/Provider.jsx';
import Users from './Components/Users.jsx';
import Signup from './Components/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
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
      },
      {
        path: "/Signup",
        element: <Signup></Signup>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('http://localhost:3000/users')
      },
      {
        path: "/signin",
        element: <Signin></Signin>

      }
    ]

  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
