import { FC } from "react";
import { Metadata } from "next";
import IconsRound from "../components/IconsRound";

import SliderEducation from "../components/SliderEducation";

import { slugs } from "../components/data/dataEducation";
import BlurText from "../components/BlurText";
export const metadata: Metadata = {
  title: "Education",
  description: "All my education ",
  keywords: "web developer education",
};

const Education: FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold pl-6 pt-6">Education</h1>
      <main className="container flex box-border">
        <section className="container mx-auto p-8">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
            <IconsRound iconSlugs={slugs} />
          </div>
        </section>
        <section className="container flex justify-end flex-wrap">
          <SliderEducation />
        </section>
      </main>
      <BlurText
        text="Its all about my education, come and reading. "
        className="custom-class text-base-baseHeaderColor ml-7"
        delay={300}
      />
    </>
  );
};

export default Education;
