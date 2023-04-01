import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Root from './routes/Root';
import Subject from './routes/Subject';
import Course from './routes/Course';
import Index from './routes/Index';
import NotFound from './routes/NotFound';

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
          // {
          //   path: "*",
          //   element: <NotFound />,
          // },
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
