'use client';

/* eslint-disable import/extensions */

import { useEffect, useRef, useState } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as THREE from 'three';

// import Image from 'next/image';
// import Link from 'next/link';\
const Hero: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x2b2b2b,
          color1: 0x6900ff,
          birdSize: 0.5,
          wingSpan: 40.0,
          speedLimit: 10.0,
          separation: 100.0,
          alignment: 100.0,
          cohesion: 100.0,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return (
    <div className="text-white py-20" ref={vantaRef}>
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="text-3xl md:text-5xl p-2 font-extrabold text-[#661fff] tracking-loose">
            Code Crafters
          </h1>
          <h2 className="text-base md:text-5xl leading-relaxed md:leading-snug mb-2 font-semibold">
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
      </div>
    </div>
  );
};

export default Hero;
