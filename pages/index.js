import Footer from "components/layouts/Footer";
import Navbar from "components/layouts/Navbar";
import Link from "next/link";

const Homepage = () => {
  return (
    <main className="homepage">
      <Navbar />

      <div className="homepage__container">
        <div className="homepage__container__content">
          <div className="homepage__container__content__hero">
            <div className="homepage__container__content__hero__content">
              <h1 className="heading-main homepage__container__content__hero__content__heading">
                Find plasma donars & Covid medicines in your city in 30 seconds
              </h1>
              <p className="paragraph homepage__container__content__hero__content__paragraph">
                You can easily find plasma donars in your city and even if you
                can't, simply raise a request for yourself. The process hardly
                takes 30 seconds
              </p>
            </div>
            <div className="homepage__container__content__hero__action">
              <div className="homepage__container__content__hero__action__buttons">
                <Link href="/find">
                  <button className="btn btn-md homepage__container__content__hero__action__buttons__primary">
                    Search plasma donars
                  </button>
                </Link>
                <Link href="/raise">
                  <button className="btn btn-md homepage__container__content__hero__action__buttons__secondary">
                    Raise a request
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Homepage;
