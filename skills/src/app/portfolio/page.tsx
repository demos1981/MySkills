import { FC } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "All my work ",
  keywords: "web developer portfolio",
};

const Portfolio: FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
      <p>This is the portfolio page.</p>
    </div>
  );
};

export default Portfolio;
