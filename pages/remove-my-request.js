import Head from "next/head";
import { useState } from "react";
import Navbar from "components/layouts/Navbar";
import { FormLabelInputGroup } from "components/sections/FormElements";
import { raiseRemoveMyRequest } from "client-utils/functions/database.functions";
import SuccessContainer from "components/sections/SuccessContainer";
import { RemoveMyRequestContainer } from "components/sections/PageComponents";

const RemoveMyRequest = () => {
  const [city, setCity] = useState(null);
  const [
    isRequestRaiseButtonClicked,
    setIsRemoveMyRequestRaiseButtonClicked,
  ] = useState(false);
  const [formError, setFormError] = useState(null);
  const [isRequestRaised, setIsRemoveMyRequestRaised] = useState(false);

  const handleRemoveMyRequestRequest = async (event) => {
    event.preventDefault();
    setFormError(null);
    setIsRemoveMyRequestRaised(false);
    setIsRemoveMyRequestRaiseButtonClicked(true);

    // Check if all fields are filled correctly
    if (!city) {
      setFormError("Please provide your city");
      setIsRemoveMyRequestRaiseButtonClicked(false);
      return;
    }

    const requestRaiseResponse = await raiseRemoveMyRequest({
      city,
      addedOn: new Date(Date.now()),
    });

    if (requestRaiseResponse) setIsRemoveMyRequestRaised(true);
    else {
      setFormError("Something went wrong. Please try again");
      setIsRemoveMyRequestRaiseButtonClicked(false);
    }
  };

  const handleRemoveRequest = (event) => {
    setCity(event.target.value);
  };

  return (
    <main className="requestcontentmanage">
      <Head>
        <title>Remove my request | Covid 19 Raksha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Remove my request | Covid 19 Raksha"
          key="title"
        />
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
            <RemoveMyRequestContainer
              handleRemoveRequest={handleRemoveRequest}
              isRequestRaiseButtonClicked={isRequestRaiseButtonClicked}
              handleRemoveMyRequestRequest={handleRemoveMyRequestRequest}
              formError={formError}
            />
          ) : (
            <div className="requestcontentmanage__container__content__header">
              <SuccessContainer
                heading="Your request for removing your request has been raised successfully."
                paragraph="We'll be removing it ASAP"
                redirectUrl="/"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default RemoveMyRequest;
