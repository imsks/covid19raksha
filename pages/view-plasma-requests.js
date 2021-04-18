import React, { useState } from "react";
import { cityNames } from "client-utils/constants";
import Navbar from "components/layouts/Navbar";
import { FormLabelSelectGroup } from "components/sections/FormElements";
import { searchPlasmaRequestsByCity } from "client-utils/functions/database.functions";
import Link from "next/link";

const ViewPlasmaRequests = () => {
  const [allPlasmaRequests, setAllPlasmaRequests] = useState([]);

  const handleSearchPlasmaRequestsByCity = async (event) => {
    const city = event.target.value;

    const responseSearchPlasmaRequests = await searchPlasmaRequestsByCity(city);

    setAllPlasmaRequests(responseSearchPlasmaRequests);
  };

  return (
    <main className="viewplasmarequests">
      <Navbar />

      <div className="viewplasmarequests__container">
        <div className="viewplasmarequests__container__content">
          <div className="viewplasmarequests__container__content__header">
            <h3 className="heading-sub viewplasmarequests__container__content__header__heading">
              View plasma requests
            </h3>
            <p className="paragraph viewplasmarequests__container__content__header__paragraph">
              Search citywise and if anyone is in need, connect with them.
            </p>
          </div>

          <div className="viewplasmarequests__container__content__main">
            <form className="form viewplasmarequests__container__content__main__form">
              <FormLabelSelectGroup
                label="Select your city"
                handleSelectOption={handleSearchPlasmaRequestsByCity}
                options={cityNames}
              />
            </form>

            <div className="viewplasmarequests__container__content__main__results">
              <div className="viewplasmarequests__container__content__main__results__container">
                <div className="viewplasmarequests__container__content__main__results__container__items">
                  {allPlasmaRequests.length > 0 ? (
                    allPlasmaRequests.map((plasmaRequest, key) => {
                      const {
                        name,
                        bloodGroup,
                        city,
                        primaryContactNo,
                        secondaryContactNo,
                      } = plasmaRequest;

                      console.log(
                        name,
                        bloodGroup,
                        city,
                        primaryContactNo,
                        secondaryContactNo
                      );

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
                    <div className="viewplasmarequests__container__content__main__results__container__result">
                      <p className="paragraph viewplasmarequests__container__content__main__results__container__result__text">
                        No plasma request found
                      </p>
                      <Link href="/">
                        <button className="btn btn-md viewplasmarequests__container__content__main__results__container__result__button">
                          Back to home
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewPlasmaRequests;

const PlasmaRequestDataContainer = ({
  name,
  bloodGroup,
  city,
  primaryContactNo,
  secondaryContactNo,
}) => {
  return (
    <div className="viewplasmarequests__container__content__main__results__container__items__item">
      <div className="viewplasmarequests__container__content__main__results__container__items__item__content">
        <h1 className="heading-sub viewplasmarequests__container__content__main__results__container__items__item__content__subheading">
          {name}
        </h1>
        {bloodGroup && (
          <h1 className="heading-main viewplasmarequests__container__content__main__results__container__items__item__content__heading">
            {bloodGroup}
          </h1>
        )}

        <h1 className="paragraph viewplasmarequests__container__content__main__results__container__items__item__content__paragraph">
          {city}
        </h1>
      </div>
      <div className="viewplasmarequests__container__content__main__results__container__items__item__action">
        <a href={`tel:${primaryContactNo}`}>
          <button className="btn btn-md viewplasmarequests__container__content__main__results__container__items__item__action__button__primary">
            Call
          </button>
        </a>
        {secondaryContactNo && (
          <a href={`tel:${secondaryContactNo}`}>
            <button className="btn btn-md viewplasmarequests__container__content__main__results__container__items__item__action__button">
              Other contact
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
