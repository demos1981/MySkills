import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-baseHeaderColor text-base-baseTextColorGrey p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">
          FOOTER
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
