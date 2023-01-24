import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <Image
            className="rounded-full object-contain"
            src="/king.svg"
            width={20}
            height={20}
            alt="logo"
          />
        </Link>
        <h1>Devosphere Blog</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-xs font-medium md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          Sign up for our news latter
        </Link>
      </div>
    </header>
  );
};

export default Header;
