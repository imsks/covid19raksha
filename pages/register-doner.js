import React, { useState } from "react";
import Link from "next/link";
import Navbar from "components/layouts/Navbar";
import { bloodGroupNames, cityNames } from "client-utils/constants";
import SuccessContainer from "components/sections/SuccessContainer";
import {
  FormLabelInputGroup,
  FormLabelSelectGroup,
} from "components/sections/FormElements";
import { joinAsPlasmaDoner } from "client-utils/functions/database.functions";
import { JoinAsDonerForm } from "components/sections/PageComponents";

const RegisterDoner = () => {
  const [name, setName] = useState(null);
  const [primaryContactNo, setPrimaryContactNo] = useState("");
  const [secondaryContactNo, setSecondaryContactNo] = useState(null);
  const [city, setCity] = useState(null);
  const [bloodGroup, setBloodGroup] = useState("NA");
  const [formError, setFormError] = useState(null);
  const [isJoinDonerButtonClicked, setIsJoinDonerButtonClicked] = useState(
    false
  );
  const [isDonerJoined, setIsDonerJoined] = useState(false);

  const handleJoinAsDoner = async (event) => {
    event.preventDefault();
    setFormError(null);
    setIsDonerJoined(false);
    setIsJoinDonerButtonClicked(true);

    // Check if all fields are filled correctly
    if (!name) {
      setFormError("Please check your name");
      setIsJoinDonerButtonClicked(false);
      return;
    }

    if (!primaryContactNo || primaryContactNo.split("").length !== 10) {
      setFormError("Please check your primary contact no");
      setIsJoinDonerButtonClicked(false);
      return;
    }

    if (!city) {
      setFormError("Please provide your city");
      setIsJoinDonerButtonClicked(false);
      return;
    }

    const joiningDonerDataPayload = {
      name,
      primaryContactNo,
      secondaryContactNo,
      city,
      bloodGroup,
      joinedOn: new Date(Date.now()),
    };

    const requestJoinDonerResponse = await joinAsPlasmaDoner(
      joiningDonerDataPayload
    );

    if (requestJoinDonerResponse) setIsDonerJoined(true);
    else {
      setFormError("Something went wrong. Please try again");
      setIsJoinDonerButtonClicked(false);
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
    <main className="joinasdoner">
      <Navbar />

      <div className="joinasdoner__container">
        <div className="joinasdoner__container__content">
          {!isDonerJoined ? (
            <JoinAsDonerForm
              handleSetName={handleSetName}
              handleSetPrimaryContactNo={handleSetPrimaryContactNo}
              handleSetSecondaryContactNo={handleSetSecondaryContactNo}
              handleSetCity={handleSetCity}
              handleSetBloodGroup={handleSetBloodGroup}
              handleJoinAsDoner={handleJoinAsDoner}
              formError={formError}
              isJoinDonerButtonClicked={isJoinDonerButtonClicked}
            />
          ) : (
            <div className="joinasdoner__container__content__header">
              <SuccessContainer
                heading="Congratulation! You've successfully joined us."
                paragraph="Anyone in the need of plasma will contact you soon."
                redirectUrl="/requests"
                ctaText="View plasma requests"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default RegisterDoner;