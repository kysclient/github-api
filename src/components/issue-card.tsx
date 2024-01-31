import React from "react";
import { Issue } from "../../types/issue";
import Banner from "./banner";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../lib/formatDate";

interface IssuCardProps {
  issue: Issue;
}

const IssueCard: React.FC<IssuCardProps> = ({ issue }) => {
  const navigate = useNavigate();
  return (
    <>
      {issue.type === "start" ? (
        <div className="shadow-xl  font-bold rounded-full py-2 px-8 bg-main-accent mb-4">
          <p className="text-center">Issue 10개 로딩 시작</p>
        </div>
      ) : issue.type === "issue" ? (
        <div
        onClick={() => {navigate(`/${issue.number}`)}}
         className="flex flex-col md:flex-row flex-wrap justify-between md:items-center border border-gray-200 p-4 rounded-xl hover:bg-gray-200/90 transition duration-300 cursor-pointer">
          <div className="space-y-2">
            <h1 className="text-sm md:text-lg font-bold">
              #{issue.number} {issue.title}
            </h1>
            <p className="text-xs md:text-sm font-medium">
              작성자: {issue.user?.login}, 작성일: {formatDate(issue.created_at!)}
            </p>
          </div>
          <div className="">
            <p className="text-xs md:text-sm font-medium text-gray-400">
              코멘트: {issue.comments}
            </p>
          </div>
        </div>
      ) : issue.type === "banner" ? (
        <Banner />
      ) : null}
    </>
  );
};

export default IssueCard;
