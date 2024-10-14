import { FC } from "react";

import { Metadata } from "next";
import { EmblaOptionsType } from "embla-carousel";
import PortfolioCarousel from "../components/PortfolioCarousel";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "All my work ",
  keywords: "web developer portfolio",
};
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Portfolio: FC = () => {
  return (
    <>
      <PortfolioCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
};

export default Portfolio;
