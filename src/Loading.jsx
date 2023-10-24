import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = () => {
  return (
    <div className="h-full text-6xl text-green-400 flex items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin" />
    </div>
  );
};
export default Loading;
