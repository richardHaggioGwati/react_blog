import '../../css/globals.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Devosphere</title>
        <meta name="description" content="daily blog" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
