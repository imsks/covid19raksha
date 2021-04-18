import { useState } from "react";
import Navbar from "components/layouts/Navbar";
import { FormLabelInputGroup } from "components/sections/FormElements";
import { raiseRemoveMyRequest } from "client-utils/functions/database.functions";
import SuccessContainer from "components/sections/SuccessContainer";

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

const RemoveMyRequestContainer = ({
  handleRemoveRequest,
  isRequestRaiseButtonClicked,
  handleRemoveMyRequestRequest,
  formError,
}) => {
  return (
    <>
      <div className="requestcontentmanage__container__content__header">
        <h3 className="heading-sub requestcontentmanage__container__content__header__heading">
          Request for removing your request
        </h3>
        <p className="paragraph requestcontentmanage__container__content__header__paragraph">
          Simply provide the primary contact no you added when raising your
          request
        </p>
      </div>

      <div className="requestcontentmanage__container__content__main">
        <form className="form requestcontentmanage__container__content__main__form">
          <FormLabelInputGroup
            label="Enter your primary contact *"
            inputType="text"
            handleInput={handleRemoveRequest}
            required={true}
          />
          <button
            className="btn btn-md form__submit"
            onClick={handleRemoveMyRequestRequest}
          >
            {!isRequestRaiseButtonClicked
              ? "Request data removal"
              : "Requesting"}
          </button>
        </form>
        <p className="form__error requestcontentmanage__container__content__main__form__error">
          {formError}
        </p>
      </div>
    </>
  );
};
