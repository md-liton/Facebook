import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './FirebaseConfig.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Profile/Profile.jsx';
import Login from './Login/Login.jsx';
import Registration from './Registration/Registration.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
