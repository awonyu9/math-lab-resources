import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Subject from './routes/subject';
import Course from './routes/course';
import Index from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        // errorElement: ,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/:subject",
            element: <Subject />,
            // children: [
            //   {
            //     path: "/:subject/:course",
            //     element: <Course />,
            //   },
            // ]
          },
          {
            path: "/:subject/:course",
            element: <Course />,
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
