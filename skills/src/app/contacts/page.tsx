import { FC } from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Contacts",
  description: "All my contacts ",
  keywords: "web developer contacts",
};

const Contacts: FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Contacts</h1>
      <p>This is the contacts page.</p>
    </div>
  );
};

export default Contacts;
