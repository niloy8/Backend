import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './App.css'
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
  },
  {
    path: "/home",
    element: <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  }
]);
function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
