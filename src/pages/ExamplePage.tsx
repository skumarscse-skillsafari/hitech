// pages/ExamplePage.tsx
import React from "react";
import TabsSection from "./TabsSection";

const ExamplePage: React.FC = () => {
  const tabs = [
    {
      label: "Overview",
      content: (
        <p>
          Welcome to the Department of Computer Science. We focus on software,
          AI, ML, and industry-aligned skills.
        </p>
      ),
    },
    {
      label: "Vision",
      content: (
        <p>
          To be a center of excellence in computer science education and
          research with a global impact.
        </p>
      ),
    },
    {
      label: "Mission",
      content: (
        <ul className="list-disc pl-6">
          <li>Deliver high-quality technical education</li>
          <li>Encourage innovation and lifelong learning</li>
          <li>Promote ethics and sustainability</li>
        </ul>
      ),
    },
  ];

  return <TabsSection sectionTitle="About the CSE Department" tabsData={tabs} />;
};

export default ExamplePage;
