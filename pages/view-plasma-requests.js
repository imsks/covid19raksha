import Head from "next/head";
import React, { useState } from "react";
import { cityNames } from "client-utils/constants";
import Navbar from "components/layouts/Navbar";
import { FormLabelSelectGroup } from "components/sections/FormElements";
import { searchPlasmaRequestsByCity } from "client-utils/functions/database.functions";
import Link from "next/link";
import { PlasmaRequestDataContainer } from "components/sections/PageComponents";

const ViewPlasmaRequests = () => {
  const [allPlasmaRequests, setAllPlasmaRequests] = useState([]);
  const [isSearchLoaded, setIsSearchLoaded] = useState(false);

  const handleSearchPlasmaRequestsByCity = async (event) => {
    const city = event.target.value;
    setIsSearchLoaded(false);

    const responseSearchPlasmaRequests = await searchPlasmaRequestsByCity(city);

    setAllPlasmaRequests(responseSearchPlasmaRequests);
    setIsSearchLoaded(true);
  };

  return (
    <main className="viewplasmausers">
      <Head>
        <title>View Plasma Requests | Covid 19 Raksha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="View Plasma Requests | Covid 19 Raksha" key="title" />
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
              View plasma requests
            </h3>
            <p className="paragraph viewplasmausers__container__content__header__paragraph">
              Search citywise and if anyone is in need, connect with them.
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
                          <PlasmaRequestDataContainer
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
                          No plasma request found
                        </p>
                        <Link href="/">
                          <button className="btn btn-md viewplasmausers__container__content__main__results__container__result__button">
                            Back to home
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewPlasmaRequests;
