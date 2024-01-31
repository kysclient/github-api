export type Issue = {
  number?: number;
  title?: string;
  created_at?: string;
  comments?: number;
  body?: string;
  user?: GithubUser;
  type: string;
};

type GithubUser = {
  login: string;
  avatar_url: string;
};
