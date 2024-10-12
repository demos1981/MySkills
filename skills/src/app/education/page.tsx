import { FC } from "react";
import { Metadata } from "next";
import IconsRound from "../components/IconsRound";
import styles from "./educationPage.module.css";
import SliderEducation from "../components/SliderEducation";

import { slugs } from "../../data/dataEducation";

// import PictureEducation from "../components/PictureEducation";
export const metadata: Metadata = {
  title: "Education",
  description: "All my education ",
  keywords: "web developer education",
};

const Education: FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold pl-6 pt-6">Education</h1>
      <main className={styles.educationPage}>
        <section className="container mx-auto p-8">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
            <IconsRound iconSlugs={slugs} />
          </div>
        </section>
        {/* <section className="container flex justify-center mx-auto p-10">
          <PictureEducation />
        </section> */}
        <section className="container flex justify-end flex-wrap">
          <SliderEducation />
        </section>
      </main>
    </>
  );
};

export default Education;
