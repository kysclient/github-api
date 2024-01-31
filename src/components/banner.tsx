import React from "react";

const Banner: React.FC = () => {
  return (
    <a href="https://thingsflow.com/ko/home" target="__blank">
      <img
        className="w-full rounded-xl my-4 overflow-hidden"
        src="https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7"
      />
    </a>
  );
};

export default Banner;
