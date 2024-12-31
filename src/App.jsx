import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./core/public/Login/login";

function App() {
  const publicRoutes = [
    {
      path: "/",
      element: (
        <Suspense>
          <Login />
        </Suspense>
      )
    }
  ];
  const routes = publicRoutes;
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  )

}

export default App