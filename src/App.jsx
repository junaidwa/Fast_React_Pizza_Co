import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./UI/Home";
import Menu, {loader as menuloader} from './features/menu/Menu'
import Error from "./UI/Error";
import Cart from './features/cart/Cart'
import Order from './features/orders/Order'
import AppLayout from "./UI/AppLayout";
import CreateOrder from './features/orders/CreateOrder'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children :[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/menu",
        element:<Menu/>,
        loader:menuloader,
        errorElement:<Error/>
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/order/:orderId",
        element:<Order/>
      },
      {
        path: "/order/new",
        element:<CreateOrder/>
      }

    ]
  }
 
])


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;