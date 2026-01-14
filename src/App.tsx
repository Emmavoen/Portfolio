import { createBrowserRouter, RouterProvider } from "react-router";

import Portfolio from "./pages/portfolio";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Portfolio />,
    },
    {
      path: "/*",
      element: <Portfolio />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
