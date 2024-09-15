import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-base-baseHeaderColor text-base-baseTextColorGrey p-4 ">
      <nav className="container mx-auto flex justify-between">
        <Link
          href="/"
          className="font-bold text-xl hover:text-amber-500 transition-all duration-500"
        >
          Home
        </Link>
        <div className="space-x-4">
          <Link
            className="hover:text-amber-500 transition-all duration-500"
            href="/education"
          >
            Education
          </Link>
          <Link
            className="hover:text-teal-300 transition-all duration-500"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="hover:text-lime-300 transition-all duration-500"
            href="/contacts"
          >
            Contacts
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
