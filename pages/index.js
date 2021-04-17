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

          <div className="homepage__container__content__footer">
            <div className="homepage__container__content__footer__content">
              <div className="homepage__container__content__footer__content__text">
                <h3 className="heading-main homepage__container__content__footer__content__text__heading">
                  Want to be a plasma donar?
                </h3>
                <p className="paragraph homepage__container__content__footer__content__text__paragraph">
                  You could share your details someone in need would contact
                  you.
                </p>
              </div>

              <div className="homepage__container__content__footer__content__action">
                <button className="btn btn-md homepage__container__content__footer__content__action__button">
                  Ready to help?
                </button>
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
