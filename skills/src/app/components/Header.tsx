import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
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
