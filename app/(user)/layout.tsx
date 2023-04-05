import '../../css/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
          content="https://images.unsplash.com/photo-1652841199247-f9ccbcbe4682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        />
        <meta
          property="og:description"
          content="My Next.js blog is a platform for sharing my thoughts and experiences with any and all things code related"
        />
      </head>

      <body className="bg-[#2b2b2b]">
        <div className="max-w-7xl mx-auto">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
