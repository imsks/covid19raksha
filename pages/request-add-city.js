import { useState } from "react";
import Navbar from "components/layouts/Navbar";
import { FormLabelInputGroup } from "components/sections/FormElements";
import { raiseRequestAddCity } from "client-utils/functions/database.functions";
import SuccessContainer from "components/sections/SuccessContainer";

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
    <main className="requestaddcity">
      <Navbar />

      <div className="raiserequest__container">
        <div className="raiserequest__container__content">
          {!isRequestRaised ? (
            <RequestAddCityContainer
              handleSetCity={handleSetCity}
              isRequestRaiseButtonClicked={isRequestRaiseButtonClicked}
              handleRequestAddCityRequest={handleRequestAddCityRequest}
              formError={formError}
            />
          ) : (
            <div className="raiserequest__container__content__header">
              <SuccessContainer
                heading="Your request for adding city has been raised successfully."
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

const RequestAddCityContainer = ({
  handleSetCity,
  isRequestRaiseButtonClicked,
  handleRequestAddCityRequest,
  formError,
}) => {
  return (
    <>
      <div className="raiserequest__container__content__header">
        <h3 className="heading-sub raiserequest__container__content__header__heading">
          Request for adding your city
        </h3>
        <p className="paragraph raiserequest__container__content__header__paragraph">
          If you can't see your city while raising a request, fill this form and
          we'll try to add this ASAP
        </p>
      </div>

      <div className="raiserequest__container__content__main">
        <form className="form raiserequest__container__content__main__form">
          <FormLabelInputGroup
            label="Enter your city *"
            inputType="text"
            handleInput={handleSetCity}
            required={true}
          />
          <button
            className="btn btn-md form__submit"
            onClick={handleRequestAddCityRequest}
          >
            {!isRequestRaiseButtonClicked ? "Request add city" : "Requesting"}
          </button>
        </form>
        <p className="form__error raiserequest__container__content__main__form__error">
          {formError}
        </p>
      </div>
    </>
  );
};
