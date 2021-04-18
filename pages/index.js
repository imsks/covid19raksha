import Footer from "components/layouts/Footer";
import Navbar from "components/layouts/Navbar";
import {
  HomepageHero,
  HompageFooter,
} from "components/sections/PageComponents";

const Homepage = () => {
  return (
    <main className="homepage">
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
