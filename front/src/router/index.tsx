import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "../pages";

const SearchPage = lazy(() =>
  import("../pages").then(({ SearchPage }) => ({
    default: SearchPage,
  }))
);

const DetailPage = lazy(() =>
  import("../pages").then(({ DetailPage }) => ({
    default: DetailPage,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Page not found!</div>,
  },
  {
    path: "/items",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <SearchPage />
      </Suspense>
    ),
  },
  {
    path: "/items/:id",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <DetailPage />
      </Suspense>
    ),
  },
]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
