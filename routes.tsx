import { RouteObject, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./src/layout/main-layout";
import IssuePage from "./src/pages/issue-page/issue-page";
import ErrorPage from "./src/pages/error-page";
import IssueDetailPage from "./src/pages/issue-page/issue-detail-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <IssuePage /> },
      { path: "/:id", element: <IssueDetailPage /> },
    ],
    errorElement: <ErrorPage />,
  },
] as RouteObject[]);
