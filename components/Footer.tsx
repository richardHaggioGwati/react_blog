import Link from 'next/link';
import { SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';
import NewsLetter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <NewsLetter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-1">
          <div className="flex gap-6 justify-center">
            <Link href="/">
              <SiLinkedin color="#888888" />
            </Link>
            <Link href="/">
              <SiGmail color="#888888" />
            </Link>
            <Link href="/">
              <SiGithub color="#888888" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
