// import Image from 'next/image';
// import Link from 'next/link';\
const Hero: React.FC = () => {
  return (
    <div>
      <div className="text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 font-extrabold text-[#661fff] tracking-loose">
              Code Crafters
            </h1>
            <h2 className="text-base md:text-5xl leading-relaxed md:leading-snug mb-2">
              Welcome.
            </h2>
            <p className="text-m md:text-base text-gray-50 mb-4">
              Whether you&apos;re a beginner just starting out or a seasoned
              programmer looking to enhance your skills, we&apos;ve got you
              covered. Our mission is to provide you with the knowledge, tools,
              and resources you need to excel in the world of programming. Join
              our community of fellow code enthusiasts and let&apos;s craft some
              code together!
            </p>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img
                  className="inline-block mt-28 hidden xl:block"
                  src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  alt="hero"
                />
              </div>
              <div>
                <img
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  alt="hero"
                />
              </div>
              <div>
                <img
                  className="inline-block mt-28 hidden lg:block"
                  src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  alt="hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
