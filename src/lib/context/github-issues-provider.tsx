import React, { createContext, useContext, useEffect, useState } from "react";
import { fetcher } from "../fetcher";
import { Issue } from "../../../types/issue";

interface GitHubIssuesContextProps {
  issues: Issue[];
  loadMore: () => void;
  initialize: () => void;
  setRepositoryUri: React.Dispatch<React.SetStateAction<string>>;
}

const GitHubIssuesContext = createContext<GitHubIssuesContextProps | undefined>(
  undefined
);

interface GitHubIssuesProviderProps {
  children: React.ReactNode;
}

export const GitHubIssuesProvider: React.FC<GitHubIssuesProviderProps> = ({
  children,
}) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState<number>(1);
  const [canLoad, setCanLoad] = useState(false);
  const [repositoryUri, setRepositoryUri] = useState("angular/angular-cli");
  const fetchGitHubIssues = async () => {
    try {
      setIssues((prevIssues) => [
        ...prevIssues,
        {
          type: "start",
        },
      ]);

      const response = await fetcher<Issue[]>(
        `${
          import.meta.env.VITE_BASE_URL
        }/repos/${repositoryUri}/issues?state=open&page=${page}&per_page=10`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "User-Agent": "thingsflow-assignment-app",
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,          
          },
        }
      );
      setIssues((prevIssues) => [
        ...prevIssues,
        ...response
          .sort((a, b) => b.comments! - a.comments!)
          .map((issue) => {
            return { ...issue, type: "issue" };
          }),
        {
          type: "banner",
        },
      ]);
    } catch (error) {
      window.alert(error);
    } finally {
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  useEffect(() => {
    if (page > 0 && canLoad) {
      fetchGitHubIssues();
    }
  }, [page, canLoad]);

  const loadMore = () => {
    setCanLoad(true);
    setPage((prevPage) => prevPage + 1);
  };

  const initialize = () => {
    setIssues([]);
    setPage(0);
  };

  return (
    <GitHubIssuesContext.Provider
      value={{ issues, loadMore, initialize, setRepositoryUri }}
    >
      {children}
    </GitHubIssuesContext.Provider>
  );
};

export const useGitHubIssues = () => {
  const context = useContext(GitHubIssuesContext);
  if (!context) {
    throw new Error(
      "useGitHubIssues must be used within a GitHubIssuesProvider"
    );
  }
  return context;
};
