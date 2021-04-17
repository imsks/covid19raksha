import Link from "next/link";
import { useState } from "react";
import Navbar from "components/layouts/Navbar";
import {
  FormLabelInputGroup,
  FormLabelSelectGroup,
} from "components/sections/FormElements";
import { raiseRequestForPlasma } from "client-utils/functions/database.functions";
import { bloodGroupNames, cityNames } from "client-utils/constants";
import SuccessContainer from "components/sections/SuccessContainer";

const RaisePlasmaRequests = () => {
  const [name, setName] = useState(null);
  const [primaryContactNo, setPrimaryContactNo] = useState("");
  const [secondaryContactNo, setSecondaryContactNo] = useState(null);
  const [city, setCity] = useState(null);
  const [bloodGroup, setBloodGroup] = useState("NA");
  const [formError, setFormError] = useState(null);
  const [
    isRequestRaiseButtonClicked,
    setIsRequestRaiseButtonClicked,
  ] = useState(false);
  const [isRequestRaised, setIsRequestRaised] = useState(false);

  const handleRaiseRequest = async (event) => {
    event.preventDefault();
    setFormError(null);
    setIsRequestRaised(false);
    setIsRequestRaiseButtonClicked(true);

    // Check if all fields are filled correctly
    if (!name) {
      setFormError("Please check your name");
      setIsRequestRaiseButtonClicked(false);
      return;
    }

    if (!primaryContactNo || primaryContactNo.split("").length !== 10) {
      setFormError("Please check your primary contact no");
      setIsRequestRaiseButtonClicked(false);
      return;
    }

    if (!city) {
      setFormError("Please provide your city");
      setIsRequestRaiseButtonClicked(false);
      return;
    }

    const requestRaiserDataPayload = {
      name,
      primaryContactNo,
      secondaryContactNo,
      city,
      bloodGroup,
      requestRaisedOn: new Date(Date.now()),
    };

    // console.log(requestRaiserDataPayload);

    const requestRaiseResponse = await raiseRequestForPlasma(
      requestRaiserDataPayload
    );

    if (requestRaiseResponse) setIsRequestRaised(true);
    else {
      setFormError("Something went wrong. Please try again");
      setIsRequestRaiseButtonClicked(false);
    }
  };

  const handleSetName = (event) => {
    setName(event.target.value);
  };

  const handleSetPrimaryContactNo = (event) => {
    setPrimaryContactNo(event.target.value);
  };

  const handleSetSecondaryContactNo = (event) => {
    setSecondaryContactNo(event.target.value);
  };

  const handleSetCity = (event) => {
    setCity(event.target.value);
  };

  const handleSetBloodGroup = (event) => {
    setBloodGroup(event.target.value);
  };

  return (
    <main className="raiserequest">
      <Navbar />

      <div className="raiserequest__container">
        <div className="raiserequest__container__content">
          {!isRequestRaised ? (
            <RaiseRequestForm
              handleSetName={handleSetName}
              handleSetPrimaryContactNo={handleSetPrimaryContactNo}
              handleSetSecondaryContactNo={handleSetSecondaryContactNo}
              handleSetCity={handleSetCity}
              handleSetBloodGroup={handleSetBloodGroup}
              handleRaiseRequest={handleRaiseRequest}
              formError={formError}
              isRequestRaiseButtonClicked={isRequestRaiseButtonClicked}
            />
          ) : (
            <div className="raiserequest__container__content__header">
              <SuccessContainer
                heading="Your request has been raised successfully."
                paragraph="Let's hope taht someone reaches you out soon."
                redirectUrl="/"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default RaisePlasmaRequests;

const RaiseRequestForm = ({
  handleSetName,
  handleSetPrimaryContactNo,
  handleSetSecondaryContactNo,
  handleSetCity,
  handleSetBloodGroup,
  handleRaiseRequest,
  formError,
  isRequestRaiseButtonClicked,
}) => {
  return (
    <>
      <div className="raiserequest__container__content__header">
        <h3 className="heading-sub raiserequest__container__content__header__heading">
          Raise A Plasma Request
        </h3>
        <p className="paragraph raiserequest__container__content__header__paragraph">
          Once request is raised, anyone can see your request and offer you
          help.
        </p>
      </div>

      <div className="raiserequest__container__content__main">
        <form className="form raiserequest__container__content__main__form">
          <FormLabelInputGroup
            label="Enter your name *"
            inputType="text"
            handleInput={handleSetName}
            required={true}
          />
          <FormLabelInputGroup
            label="Enter primary contact no *"
            inputType="tel"
            handleInput={handleSetPrimaryContactNo}
            required={true}
          />
          <FormLabelInputGroup
            label="Enter secondary contact no"
            inputType="tel"
            handleInput={handleSetSecondaryContactNo}
            required={true}
          />
          <FormLabelSelectGroup
            label="Select your city"
            handleSelectOption={handleSetCity}
            options={cityNames}
          />
          <p className="paragraph raiserequest__container__content__main__form__paragraph">
            If your city is not listed please request us to add it
            <Link href="request-add-city"> here</Link>
          </p>
          <FormLabelSelectGroup
            label="Select patient's blood group (If emergency, can leave it blank)"
            handleSelectOption={handleSetBloodGroup}
            options={bloodGroupNames}
          />
          <button
            className="btn btn-md form__submit"
            onClick={handleRaiseRequest}
          >
            {!isRequestRaiseButtonClicked ? "Raise request" : "Raising"}
          </button>
        </form>
        <p className="form__error raiserequest__container__content__main__form__error">
          {formError}
        </p>
      </div>
    </>
  );
};
