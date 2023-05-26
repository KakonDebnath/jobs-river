import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/Page/ErrorPage';
import Home from './components/Page/Home/Home';
import JobDetails from './components/Page/JobDetails';
import AppliedJob from './components/Page/AppliedJob';
import Blog from './components/Page/Blog';
import Statistics from './components/Page/Statistics';
import { getData } from './loader/loader';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: getData,
    children: [
      { path: "/", element: <Home /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/appliedJob", element: <AppliedJob /> },
      { path: "/jobDetails/:id", element: <JobDetails />},
      { path: "/blog", element: <Blog /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
