import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bmical from './Componant/Bmical';
import Faq from './Componant/Faq';
import Gitsearch from './Componant/Gitsearch';
import Quote from './Componant/Quote';
import Shoping from './Componant/Shoping';
import Slider from './Componant/Slider';
import Videoplayer from './Componant/Videoplayer';
import Home from './Componant/Home';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/Bmicl',
        element: <Bmical/>
      },
      {
        path:'/Faq',
        element: <Faq/>
      },
      {
        path:'/Gitsearch',
        element: <Gitsearch/>
      },
      {
        path:'/Quote',
        element: <Quote/>
      },
      {
        path:'/Shoping',
        element: <Shoping/>
      },
      {
        path:'/Slider',
        element: <Slider/>
      },
      {
        path:'/Video',
        element: <Videoplayer/>
      },
    ]
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
 