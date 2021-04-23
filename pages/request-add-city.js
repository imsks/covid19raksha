import Head from "next/head";
import { useState } from "react";
import Navbar from "components/layouts/Navbar";
import { raiseRequestAddCity } from "client-utils/functions/database.functions";
import SuccessContainer from "components/sections/SuccessContainer";
import { RequestAddCityContainer } from "components/sections/PageComponents";

const RequestAddCity = () => {
  const [city, setCity] = useState(null);
  const [
    isRequestRaiseButtonClicked,
    setIsRequestAddCityRaiseButtonClicked,
  ] = useState(false);
  const [formError, setFormError] = useState(null);
  const [isRequestRaised, setIsRequestAddCityRaised] = useState(false);

  const handleRequestAddCityRequest = async (event) => {
    event.preventDefault();
    setFormError(null);
    setIsRequestAddCityRaised(false);
    setIsRequestAddCityRaiseButtonClicked(true);

    // Check if all fields are filled correctly
    if (!city) {
      setFormError("Please provide your city");
      setIsRequestAddCityRaiseButtonClicked(false);
      return;
    }

    const requestRaiseResponse = await raiseRequestAddCity({
      city,
      addedOn: new Date(Date.now()),
    });

    if (requestRaiseResponse) setIsRequestAddCityRaised(true);
    else {
      setFormError("Something went wrong. Please try again");
      setIsRequestAddCityRaiseButtonClicked(false);
    }
  };

  const handleSetCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <main className="requestcontentmanage">
      <Head>
        <title>Request add city | Covid 19 Raksha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Request add city | Covid 19 Raksha" key="title" />
        <meta
          property="og:description"
          content="Covid 19 Raksha helps you find plasma donors in your city"
          key="title"
        />
      </Head>

      <Navbar />

      <div className="requestcontentmanage__container">
        <div className="requestcontentmanage__container__content">
          {!isRequestRaised ? (
            <RequestAddCityContainer
              handleSetCity={handleSetCity}
              isRequestRaiseButtonClicked={isRequestRaiseButtonClicked}
              handleRequestAddCityRequest={handleRequestAddCityRequest}
              formError={formError}
            />
          ) : (
            <div className="requestcontentmanage__container__content__header">
              <SuccessContainer
                heading="Your request for adding a city has been raised successfully"
                paragraph="We'll be adding it ASAP"
                redirectUrl="/"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default RequestAddCity;