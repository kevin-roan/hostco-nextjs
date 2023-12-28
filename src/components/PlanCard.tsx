import React from "react";

function PlanCard() {
  return (
    <div className="border rounded-md my-4  p-4 flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold">Starter</h1>
      <p className="text-[gray] text-md">Ideal solution for beginners.</p>
      <h1 className="text-4xl font-bold">$3.59/mo</h1>
      <p className="text-[gray]">Normally $9.99</p>
      <button className="bg-[var(--primary-dark)] text-white px-14 py-3 text-sm rounded-[100px] font-bold">
        Get Monthly Plan
      </button>
      <p className="text-sm text-[gray]">Auto re-news at regular rate</p>
      <h1 className="text-xl font-bold">Top Features</h1>
      <div className="">
        <div className="">
          <input type="checkbox" />
          <label className="text-[gray] px-2">10 GB SSD Storage</label>
        </div>
        <div className="">
          <input type="checkbox" />
          <label className="text-[gray] px-2">10 GB SSD Storage</label>
        </div>
        <div className="">
          <input type="checkbox" />
          <label className="text-[gray] px-2">10 GB SSD Storage</label>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
