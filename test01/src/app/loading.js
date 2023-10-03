import React from "react";
import { Spin } from "antd";

export const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-10 bg-matchy-orange text-white">
      <Spin size="large" />
      <span>Loading...</span>
    </div>
  );
};
export default Loading;
