import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from "./pages/page"
import Page2 from "./pages/page2"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path:"/2",
    element:<Page2/>
  }
]);


function App() {
  const [count, setCount] = useState(0);



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
