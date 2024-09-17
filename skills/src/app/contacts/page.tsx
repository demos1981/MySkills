import { FC } from "react";
import { Metadata } from "next";
import Forma from "../components/Form";
export const metadata: Metadata = {
  title: "Contacts",
  description: "All my contacts ",
  keywords: "web developer contacts",
};

const Contacts: FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold ml-6 mt-6">Contacts</h1>
      <div className="container flex justify-between mx-auto p-8">
        <Forma />
      </div>
    </>
  );
};

export default Contacts;
