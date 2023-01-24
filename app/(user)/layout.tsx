import '../../css/globals.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Devosphere</title>
        <meta name="description" content="daily blog" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <main className="max-w-7xl mx-auto">
          <Header />
          <Banner />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
