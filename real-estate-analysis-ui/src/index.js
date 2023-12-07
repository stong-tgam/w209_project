import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import Home from './pages/Home'
import WhereToInvest from './pages/WhereToInvest'
import WhereToStartBusiness from './pages/WhereToStartBusiness'
import CovidImpact from './pages/CovidImpact'
import Dataset from './pages/Dataset'
import About from './pages/About'
import Error from './pages/Error'
import reportWebVitals from './reportWebVitals';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/where_to_invest',
        element: <WhereToInvest />,
      },
      {
        path: '/where_to_start_business',
        element: <WhereToStartBusiness />,
      },
      {
        path: '/year_to_year',
        element: <CovidImpact />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
