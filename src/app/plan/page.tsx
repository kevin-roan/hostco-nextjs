import { PlanCard } from "@/components";
import React from "react";

const PricingPlan = () => {
  return (
    <main>
      <div className="flex flex-col items-center gap-7">
        <span className="bg-[var(--primary-light)] text-white rounded-2xl px-3 py-1">
          HOSTING PLAN
        </span>
        <h1 className="text-4xl font-bold text-center">
          Choose Perfect{" "}
          <span className="text-[var(--primary-dark)] font-bold">
            Web Hosting <br />
          </span>
          Package For You
        </h1>
        <button>ON / OFF</button>
      </div>
      <div>
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
    </main>
  );
};

export default PricingPlan;
