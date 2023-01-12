import '../../css/globals.css';
import Header from '../../components/Header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Devosphere</title>
        <meta name="description" content="daily blog" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
