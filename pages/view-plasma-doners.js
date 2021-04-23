import Head from "next/head";
import React, { useState } from "react";
import { cityNames } from "client-utils/constants";
import Navbar from "components/layouts/Navbar";
import { FormLabelSelectGroup } from "components/sections/FormElements";
import { searchPlasmaDonorsByCity } from "client-utils/functions/database.functions";
import Link from "next/link";

const ViewPlasmaDonors = () => {
  const [allPlasmaRequests, setAllPlasmaRequests] = useState([]);
  const [isSearchLoaded, setIsSearchLoaded] = useState(false);

  const handleSearchPlasmaRequestsByCity = async (event) => {
    const city = event.target.value;
    setIsSearchLoaded(false);

    const responseSearchPlasmaRequests = await searchPlasmaDonorsByCity(city);

    setAllPlasmaRequests(responseSearchPlasmaRequests);
    setIsSearchLoaded(true);
  };

  return (
    <main className="viewplasmausers">
      <Head>
        <title>View plasma donors | Covid 19 Raksha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="View plasma donors | Covid 19 Raksha"
          key="title"
        />
        <meta
          property="og:description"
          content="Covid 19 Raksha helps you find plasma donors in your city"
          key="title"
        />
      </Head>

      <Navbar />

      <div className="viewplasmausers__container">
        <div className="viewplasmausers__container__content">
          <div className="viewplasmausers__container__content__header">
            <h3 className="heading-sub viewplasmausers__container__content__header__heading">
              View plasma donors
            </h3>
            <p className="paragraph viewplasmausers__container__content__header__paragraph">
              Search city-wise and if anyone is in need, connect with them.
            </p>
          </div>

          <div className="viewplasmausers__container__content__main">
            <form className="form viewplasmausers__container__content__main__form">
              <FormLabelSelectGroup
                label="Select your city"
                handleSelectOption={handleSearchPlasmaRequestsByCity}
                options={cityNames}
              />
            </form>

            <div className="viewplasmausers__container__content__main__results">
              <div className="viewplasmausers__container__content__main__results__container">
                {!isSearchLoaded ? (
                  <div className="viewplasmausers__container__content__main__results__container__result">
                    <p className="paragraph viewplasmausers__container__content__main__results__container__result__text">
                      Loading...
                    </p>
                  </div>
                ) : (
                  <div className="viewplasmausers__container__content__main__results__container__items">
                    {allPlasmaRequests.length > 0 ? (
                      allPlasmaRequests.map((plasmaRequest, key) => {
                        const {
                          name,
                          bloodGroup,
                          city,
                          primaryContactNo,
                          secondaryContactNo,
                        } = plasmaRequest;

                        return (
                          <PlasmaDonorDataContainer
                            name={name}
                            bloodGroup={bloodGroup}
                            city={city}
                            primaryContactNo={primaryContactNo}
                            secondaryContactNo={secondaryContactNo}
                            key={key}
                          />
                        );
                      })
                    ) : (
                      <div className="viewplasmausers__container__content__main__results__container__result">
                        <p className="paragraph viewplasmausers__container__content__main__results__container__result__text">
                          No plasma requests found
                        </p>
                      </div>
                    )}
                  </div>
                )}
                <div className="viewplasmausers__container__content__main__results__container__result">
                  <Link href="/raise">
                    <button className="btn btn-md viewplasmausers__container__content__main__results__container__result__button__primary">
                      Raise a request
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewPlasmaDonors;

const PlasmaDonorDataContainer = ({
  name,
  bloodGroup,
  city,
  primaryContactNo,
  secondaryContactNo,
}) => {
  return (
    <div className="viewplasmausers__container__content__main__results__container__items__item">
      <div className="viewplasmausers__container__content__main__results__container__items__item__content">
        <h1 className="heading-sub viewplasmausers__container__content__main__results__container__items__item__content__subheading">
          {name}
        </h1>
        {bloodGroup && (
          <h1 className="heading-main viewplasmausers__container__content__main__results__container__items__item__content__heading">
            {bloodGroup}
          </h1>
        )}

        <h1 className="paragraph viewplasmausers__container__content__main__results__container__items__item__content__paragraph">
          {city}
        </h1>
      </div>
      <div className="viewplasmausers__container__content__main__results__container__items__item__action">
        <a href={`tel:${primaryContactNo}`}>
          <button className="btn btn-md viewplasmausers__container__content__main__results__container__items__item__action__button__primary">
            Call
          </button>
        </a>
        {secondaryContactNo && (
          <a href={`tel:${secondaryContactNo}`}>
            <button className="btn btn-md viewplasmausers__container__content__main__results__container__items__item__action__button">
              Other contact
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
