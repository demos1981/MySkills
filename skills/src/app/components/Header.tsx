import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-base-baseHeaderColor text-base-baseTextColorGrey p-4 relative z-50 ">
      <nav className="container mx-auto flex justify-between">
        <Link
          href="/"
          className="font-bold text-xl hover:text-base-baseHeaderTextColor transition-all duration-500"
        >
          Home
        </Link>
        <div className="space-x-4">
          <Link
            className="font-bold text-xl hover:text-base-baseHeaderTextColor transition-all duration-500"
            href="/education"
          >
            Education
          </Link>
          <Link
            className="font-bold text-xl hover:text-base-baseHeaderTextColor transition-all duration-500"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="font-bold text-xl hover:text-base-baseHeaderTextColor transition-all duration-500"
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
