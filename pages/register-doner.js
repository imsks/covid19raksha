import React, { useState } from "react";
import Head from "next/head";
import Navbar from "components/layouts/Navbar";
import SuccessContainer from "components/sections/SuccessContainer";
import { joinAsPlasmaDonor } from "client-utils/functions/database.functions";
import { JoinAsDonorForm } from "components/sections/PageComponents";

const RegisterDonor = () => {
  const [name, setName] = useState(null);
  const [primaryContactNo, setPrimaryContactNo] = useState("");
  const [secondaryContactNo, setSecondaryContactNo] = useState(null);
  const [city, setCity] = useState(null);
  const [bloodGroup, setBloodGroup] = useState("NA");
  const [formError, setFormError] = useState(null);
  const [isJoinDonorButtonClicked, setIsJoinDonorButtonClicked] = useState(
    false
  );
  const [isDonorJoined, setIsDonorJoined] = useState(false);

  const handleJoinAsDonor = async (event) => {
    event.preventDefault();
    setFormError(null);
    setIsDonorJoined(false);
    setIsJoinDonorButtonClicked(true);

    // Check if all fields are filled correctly
    if (!name) {
      setFormError("Please check your name");
      setIsJoinDonorButtonClicked(false);
      return;
    }

    if (!primaryContactNo || primaryContactNo.split("").length !== 10) {
      setFormError("Please check your primary contact no");
      setIsJoinDonorButtonClicked(false);
      return;
    }

    if (!city) {
      setFormError("Please provide your city");
      setIsJoinDonorButtonClicked(false);
      return;
    }

    const joiningDonorDataPayload = {
      name,
      primaryContactNo,
      secondaryContactNo,
      city,
      bloodGroup,
      joinedOn: new Date(Date.now()),
    };

    const requestJoinDonorResponse = await joinAsPlasmaDonor(
      joiningDonorDataPayload
    );

    if (requestJoinDonorResponse) setIsDonorJoined(true);
    else {
      setFormError("Something went wrong. Please try again");
      setIsJoinDonorButtonClicked(false);
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
      <Head>
        <title>Register as donor | Covid 19 Raksha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Register as donor | Covid 19 Raksha" key="title" />
        <meta
          property="og:description"
          content="Covid 19 Raksha helps you find plasma donors in your city"
          key="title"
        />
      </Head>

      <Navbar />

      <div className="joinasdoner__container">
        <div className="joinasdoner__container__content">
          {!isDonorJoined ? (
            <JoinAsDonorForm
              handleSetName={handleSetName}
              handleSetPrimaryContactNo={handleSetPrimaryContactNo}
              handleSetSecondaryContactNo={handleSetSecondaryContactNo}
              handleSetCity={handleSetCity}
              handleSetBloodGroup={handleSetBloodGroup}
              handleJoinAsDonor={handleJoinAsDonor}
              formError={formError}
              isJoinDonorButtonClicked={isJoinDonorButtonClicked}
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

export default RegisterDonor;