import { useNavigate, useParams } from "react-router-dom";
import { useGitHubIssues } from "../../lib/context/github-issues-provider";
import { Issue } from "../../../types/issue";
import Markdown from "markdown-to-jsx";
import { Button } from "../../components/ui/button";

const IssueDetailPage = () => {
  const { issues  } = useGitHubIssues();
  const navigate = useNavigate();
  const params = useParams();
  const issue: Issue | undefined = issues.find(
    (item) => item.number === parseInt(params.id!)
  );

  if (!issue) {
    return null;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between md:items-center border-b border-gray-200 p-4 ">
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
              <img src={issue.user?.avatar_url} />
            </div>
            <div className="space-y-2">
              <h1 className="text-sm md:text-lg font-bold">
                #{issue.number} {issue.title}
              </h1>
              <p className="text-xs md:text-sm font-medium">
                작성자: {issue.user?.login}, 작성일: 2019.12.31
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-xs md:text-sm font-medium text-gray-400">
              코멘트: {issue.comments}
            </p>
          </div>
        </div>
        <div className="p-4">
          <Markdown forceBlock={true}>{issue.body!}</Markdown>
        </div>
      </div>

      <div className="p-4 flex items-center justify-center">
        <Button onClick={() => {navigate('/')}}>
            뒤로가기
        </Button>
      </div>
    </>
  );
};

export default IssueDetailPage;
