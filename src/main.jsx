import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Root from './routes/root';
import Subject from './routes/subject';
import Course from './routes/course';
import Index from './routes/index';
import NotFound from './routes/notFound';
import About from './routes/about';

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
