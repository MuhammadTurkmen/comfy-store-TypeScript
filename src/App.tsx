import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Error,
  About,
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductsLoader } from "./pages/SingleProduct";
import { loader as checkoutLoader } from "./pages/Checkout";
// Actions\

import { action as registerUser } from "@/pages/Register";
import { action as loginUser } from "@/pages/Login";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductsLoader,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />,
        loader: checkoutLoader(store),
      },
      {
        path: "orders",
        element: <Orders />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorElement />,
    action: loginUser(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorElement />,
    action: registerUser,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
