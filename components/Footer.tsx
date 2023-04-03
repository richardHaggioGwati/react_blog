import Link from 'next/link';
import { SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';
import NewsLetter from './Newsletter';

const Footer = () => {
  return (
    <>
      <NewsLetter />
      <div className="relative mt-10 mb-10 px-4 sm:px-0">
        <div className="absolute inset-0 h-1/2" />
        <div className="relative drop-shadow-2xl grid mx-auto overflow-hidden bg-slate-100 divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 drop-shadow-2xl rounded-full bg-white hover:scale-125">
              <Link href="//www.linkedin.com/in/richard-gwati-636a80233/">
                <SiLinkedin color="#0A66C2" />
              </Link>
            </div>
            <p className="font-bold tracking-wide text-gray-800">Linkedin</p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 drop-shadow-2xl rounded-full bg-white hover:scale-125">
              <Link href="https://github.com/richardHaggioGwati">
                <SiGmail color="#661fff" />
              </Link>
            </div>
            <p className="font-bold tracking-wide text-gray-800">Gmail</p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full drop-shadow-2xl bg-white hover:scale-125">
              <Link href="mailto:haggio0844@gmail.com ">
                <SiGithub color="#888888" />
              </Link>
            </div>
            <p className="font-bold tracking-wide text-gray-800">Github</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
