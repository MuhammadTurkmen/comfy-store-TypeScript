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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
