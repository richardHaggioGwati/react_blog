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
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
