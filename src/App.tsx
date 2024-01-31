import { RouterProvider } from "react-router-dom";
import { router } from "../routes";
import { GitHubIssuesProvider } from "./lib/context/github-issues-provider";

function App() {
  return (
    <GitHubIssuesProvider>
      <RouterProvider router={router} />
    </GitHubIssuesProvider>
  );
}

export default App;
