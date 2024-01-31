import BottomTab from "../../components/bottom-tab";
import { useGitHubIssues } from "../../lib/context/github-issues-provider";
import IssueCard from "../../components/issue-card";
const IssuePage = () => {
  const { issues, loadMore, initialize } = useGitHubIssues();

  return (
    <>
      <section className=" flex flex-col justify-center items-center">
        <div>
          <div className="space-y-8">
            {issues.map((issue, idx) => (
              <IssueCard key={idx} issue={issue} />
            ))}
          </div>
        </div>
      </section>
      <div className="h-[6rem]" />
      <BottomTab loadMore={loadMore} initialize={initialize} />
    </>
  );
};

export default IssuePage;
