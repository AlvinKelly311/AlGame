import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Shopping from './Shopping.jsx'
import ShoppingCart from './ShoppingCart.jsx';
import { ShopCartprovider } from './Contextapi.jsx';
import Home from './Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home", 
        element: <Home />,
      },
      {
        path: "/Shopping", 
        element: <Shopping />,
      },
      {
        path: "/ShoppingCart", 
        element: <ShoppingCart />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopCartprovider>
    <RouterProvider router={router} />
    </ShopCartprovider> {/*so that u can pass those data from the context componet to the different*/ }
    
  </StrictMode>
);
