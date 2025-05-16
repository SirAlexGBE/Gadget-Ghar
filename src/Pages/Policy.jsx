import React from "react";
import PolicyHeader from "../Components/Policy/Policyheader";
import PolicyTabs from "../Components/Policy/PolicyTabs";

export default function Policy() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <PolicyHeader />
        <main className="container mx-auto px-4 py-8 max-w-5xl">
          <PolicyTabs />
        </main>
      </div>
    </>
  );
}
