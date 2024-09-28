import { FC } from "react";
import HeroSection from "./components/HeroSection";
import HeroSectionBackground from "./components/HeroSectionBackground";

const Home: FC = () => {
  return (
    <div className="container  ">
      <HeroSectionBackground />
      <HeroSection />
    </div>
  );
};

export default Home;
