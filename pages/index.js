import Head from "next/head";
import Footer from "components/layouts/Footer";
import Navbar from "components/layouts/Navbar";
import {
  HomepageHero,
  HompageFooter,
} from "components/sections/PageComponents";

const Homepage = () => {
  return (
    <main className="homepage">
      <Head>
        <title>Covid 19 Raksha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Covid 19 Raksha" key="title" />
        <meta
          property="og:description"
          content="Covid 19 Raksha helps you find plasma donors in your city"
          key="title"
        />
      </Head>
      <Navbar />

      <div className="homepage__container">
        <div className="homepage__container__content">
          <HomepageHero />

          <HompageFooter />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Homepage;
