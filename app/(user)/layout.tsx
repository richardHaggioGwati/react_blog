'use client';

import { useEffect } from 'react';
import '../../css/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r124/three.min.js',
    );
    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Crafters</title>
        <meta
          name="description"
          content="My Next.js blog is a platform for sharing my thoughts and experiences with any and all things code related.It is currently running on Next.js which is a popular React-based framework for building server-side rendered (SSR) web applications that provide better performance, SEO, and user experience than traditional client-side rendered apps."
        />
        <link rel="icon" href="/king.svg" />
        <meta property="og:title" content="Code Crafters" />
        <meta property="og:type" content="blog" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
        <meta
          property="og:description"
          content="My Next.js blog is a platform for sharing my thoughts and experiences with any and all things code related"
        />
      </head>

      <body className="bg-[#2b2b2b]">
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
