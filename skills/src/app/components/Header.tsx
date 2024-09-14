import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-base-baseHeaderColor text-base-baseTextColorGrey p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">
          Home
        </Link>
        <div className="space-x-4">
          <Link href="/education">Education</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
