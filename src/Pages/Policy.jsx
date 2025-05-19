import React from "react";
import PolicyHeader from "../Components/Policy/Policyheader";
import PolicyTabs from "../Components/Policy/PolicyTabs";
import {useLocation} from "react-router";
import {useEffect} from "react";

export default function Policy() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, [location]);
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
