import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Root, Subject, Course, NotFound, About, Index } from "./routes";


const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/:subject",
            element: <Subject />,
          },
          {
            path: "/:subject/:course",
            element: <Course />,
          },
          {
            path: "/about",
            element: <About />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
