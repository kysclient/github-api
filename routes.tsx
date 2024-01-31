import { RouteObject, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./src/layout/main-layout";
import IssuePage from "./src/pages/issue-page/issue-page";
import ErrorPage from "./src/pages/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <IssuePage /> },
      // { path: "/privacy/:id", element: <TermsPage /> },
    ],
    errorElement: <ErrorPage />,
  },
] as RouteObject[]);
