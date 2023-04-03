import '../../css/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Crafters</title>
        <meta name="description" content="daily blog" />
        <link rel="icon" href="/king.svg" />
      </head>

      <body className="bg-[#2b2b2b]">
        <div className="max-w-7xl mx-auto">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
