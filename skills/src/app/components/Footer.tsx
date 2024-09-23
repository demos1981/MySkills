import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-baseHeaderColor text-base-baseTextColorGrey p-4 mt-1">
      <nav className="container mx-auto flex justify-between ">
        <span className="font-bold text-xl hover:text-base-newColor transition-all duration-500 cursor-pointer">
          Yaremenko Dmitriy
        </span>
        <div className="space-x-4">
          <Link
            className="hover:text-base-newColor transition-all duration-500"
            href="#"
          >
            GitHub
          </Link>
          <Link
            className="hover:text-base-newColor transition-all duration-500"
            href="#"
          >
            Linkedin
          </Link>
          <Link
            className="hover:text-base-newColor transition-all duration-500"
            href="#"
          >
            Telegram
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
