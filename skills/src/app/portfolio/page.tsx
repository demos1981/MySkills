import { FC } from "react";
import { Metadata } from "next";
import Slider from "../components/Slider";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "All my work ",
  keywords: "web developer portfolio",
};

const Portfolio: FC = () => {
  return (
    <>
      <Slider />
    </>
  );
};

export default Portfolio;
