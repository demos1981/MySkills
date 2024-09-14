import { FC } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Education",
  description: "All my education ",
  keywords: "web developer education",
};
const Education: FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Education</h1>
      <p>This is the education page.</p>
    </div>
  );
};

export default Education;
