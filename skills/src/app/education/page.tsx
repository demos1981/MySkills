import { FC } from "react";
import { Metadata } from "next";
import IconsRound from "../components/IconsRound";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export const metadata: Metadata = {
  title: "Education",
  description: "All my education ",
  keywords: "web developer education",
};

const Education: FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold ml-6 mt-6">Education</h1>

      <div className="container mx-auto p-8"></div>
      <section>
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
          <IconsRound iconSlugs={slugs} />
        </div>
      </section>
    </>
  );
};

export default Education;
