import { FC } from "react";

import { Metadata } from "next";

import PortfolioCarousel from "../components/PortfolioCarousel";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "All my work ",
  keywords: "web developer portfolio",
};

const Portfolio: FC = () => {
  return (
    <>
      <PortfolioCarousel />
    </>
  );
};

export default Portfolio;
