import React from "react";

const SHIMMER_COUNT = 50;
const Shimmer = () => {
  const shimmers = [];
  console.log("Shimmer rendered");
  for (let i = 1; i <= SHIMMER_COUNT; i++) {
    shimmers.push(
      <div className="w-full h-[480px] bg-slate-200 animate"></div>
    );
  }
  return <>{shimmers}</>;
};

export default Shimmer;
