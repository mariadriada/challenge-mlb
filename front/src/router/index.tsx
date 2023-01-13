import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, SearchPage, DetailPage } from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> , errorElement: <div>Page not found!</div>},
  { path: "/items", element: <SearchPage /> },
  { path: "/detail", element: <DetailPage /> },
]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
