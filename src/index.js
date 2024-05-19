import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import Courses from './pages/Courses/Courses';
import SingleCoursePage from './pages/SingleCoursePage/SingleCoursePage';
import PurchasedCourses from './pages/PurchasedCourses/PurchasedCourses';
import CourseForm from './components/ui/CourseForm/CourseForm';
import UpdatePage from './pages/UpdatePage/UpdatePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/profile',
    element: < Profile/>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/courses',
    element: < Courses/>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/course/:id',
    element: < SingleCoursePage/>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/purchased-courses',
    element: < PurchasedCourses/>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/update/:id',
    element: < UpdatePage></UpdatePage>,
    errorElement: <div>404 Not Found</div>,
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
