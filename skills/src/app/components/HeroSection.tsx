"use client";

import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import styles from "./HeroSection.module.css";

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
  text: string;
}

const Page = ({ offset, gradient, onClick, text }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      {/* Replace number with the text prop */}
      <span>{text}</span>
    </ParallaxLayer>
  </>
);

function HeroSection() {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    // <div className="relative z-30">
    <div style={{ background: "#dfdfdf" }}>
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={3}
        horizontal
      >
        {/* Pass the text you want to display on each slide */}
        <Page
          offset={0}
          gradient="pink"
          text="Frontend"
          onClick={() => scroll(1)}
        />
        <Page
          offset={1}
          gradient="teal"
          text="Backend"
          onClick={() => scroll(2)}
        />
        <Page
          offset={2}
          gradient="tomato"
          text="Database"
          onClick={() => scroll(0)}
        />
      </Parallax>
    </div>
    // </div>
  );
}

export default HeroSection;
