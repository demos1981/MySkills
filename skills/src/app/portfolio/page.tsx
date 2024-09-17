import { FC } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "All my work ",
  keywords: "web developer portfolio",
};

const Portfolio: FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold ml-6 mt-6">Portfolio</h1>

      <div className="container mx-auto p-8"></div>
    </>
  );
};

export default Portfolio;
