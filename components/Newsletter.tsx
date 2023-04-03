const NewsLetter = () => {
  return (
    <div className="relative px-4 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <span className="relative inline-block">
        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          className="absolute fill-slate-50 top-32 -left-12 z-0 skew-y-6 hidden w-32 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-1 sm:block"
        >
          <defs>
            <pattern
              id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
              x="0"
              y="0"
              width=".135"
              height=".30"
            >
              <circle cx="1" cy="1" r=".7" />
            </pattern>
          </defs>
          <rect
            fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
            width="52"
            height="24"
          />
        </svg>
      </span>
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-bold tracking-wider text-teal-900 uppercase rounded-full bg-[#1fe6b3]">
                LEVEL UP
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none">
              Join the coding
              <br className="hidden md:block" />
              revolution{' '}
              <span className="inline-block text-[#661fff]">today!</span>
            </h2>
            <p className="text-base text-gray-200 md:text-lg">
              Our blog is dedicated to empowering you with the knowledge and
              skills you need to stay ahead in the constantly evolving world of
              programming. From beginner-friendly tips and tricks to advanced
              coding techniques, we&apos;ve got you covered. Join our community
              of like-minded individuals who are passionate about coding and
              take your first step towards becoming a part of the future!
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md    bg-[#661fff] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="https://kitwind.io/assets/kometa/full-browser.png"
          className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt=""
        />
      </div>
    </div>
  );
};

export default NewsLetter;
