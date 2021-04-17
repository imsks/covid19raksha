import { useState } from "react";
import Navbar from "components/layouts/Navbar";
import {
  FormLabelInputGroup,
  FormLabelSelectGroup,
} from "components/sections/FormElements";
import React from "react";
import Link from "next/link";

const RaisePlasmaRequests = () => {
  const [name, setName] = useState(null);
  const [primaryContactNo, setPrimaryContactNo] = useState("");
  const [secondaryContactNo, setSecondaryContactNo] = useState(null);
  const [city, setCity] = useState(null);
  const [bloodGroup, setBloodGroup] = useState("NA");
  const [formError, setFormError] = useState(null);

  const handleRaiseRequest = (event) => {
    event.preventDefault();
    setFormError(null);

    // Check if all fields are filled correctly
    if (!name) {
      setFormError("Please check your name");
      return;
    }

    if (!primaryContactNo || primaryContactNo.split("").length !== 10) {
      setFormError("Please check your primary contact no");
      return;
    }

    if (!city) {
      setFormError("Please provide your city");
      return;
    }

    const requestRaiserDataPayload = {
      name,
      primaryContactNo,
      secondaryContactNo,
      city,
      bloodGroup,
    };

    console.log(requestRaiserDataPayload);
  };

  return (
    <main className="raiserequest">
      <Navbar />

      <div className="raiserequest__container">
        <div className="raiserequest__container__content">
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
                handleInput={(event) => setName(event.target.value)}
                required={true}
              />
              <FormLabelInputGroup
                label="Enter primary contact no *"
                inputType="tel"
                handleInput={(event) => setPrimaryContactNo(event.target.value)}
                required={true}
              />
              <FormLabelInputGroup
                label="Enter secondary contact no"
                inputType="tel"
                handleInput={(event) =>
                  setSecondaryContactNo(event.target.value)
                }
                required={true}
              />
              <FormLabelSelectGroup
                label="Select your city"
                handleSelectOption={(event) => setCity(event.target.value)}
                options={[
                  {
                    optionLabel: "Select city",
                    optionValue: null,
                  },
                  {
                    optionLabel: "Delhi",
                    optionValue: "DELHI",
                  },
                  {
                    optionLabel: "Pune",
                    optionValue: "PUNE",
                  },
                  {
                    optionLabel: "Mumbai",
                    optionValue: "MUMBAI",
                  },

                  {
                    optionLabel: "Lucknow",
                    optionValue: "LUCKNOW",
                  },
                  {
                    optionLabel: "Bhopal",
                    optionValue: "BHOPAL",
                  },
                  {
                    optionLabel: "Kolkata",
                    optionValue: "KOLKATA",
                  },
                  {
                    optionLabel: "Chennai",
                    optionValue: "CHENNAI",
                  },
                  {
                    optionLabel: "Bangalore",
                    optionValue: "BANGALORE",
                  },
                  {
                    optionLabel: "Hyderabad",
                    optionValue: "HYDERABAD",
                  },
                  {
                    optionLabel: "Ahmedabad",
                    optionValue: "AHMEDABAD",
                  },
                ]}
              />
              <p className="paragraph raiserequest__container__content__main__form__paragraph">
                If your city is not listed please request us to add it{" "}
                <Link href="request-add-city">here</Link>
              </p>
              <FormLabelSelectGroup
                label="Select patient's blood group (If emergency, can leave it blank)"
                handleSelectOption={(event) =>
                  setBloodGroup(event.target.value)
                }
                options={[
                  {
                    optionLabel: "Select blood group",
                    optionValue: null,
                  },
                  {
                    optionLabel: "A+",
                    optionValue: "A+",
                  },
                  {
                    optionLabel: "A-",
                    optionValue: "A-",
                  },
                  {
                    optionLabel: "B+",
                    optionValue: "B+",
                  },
                  {
                    optionLabel: "B-",
                    optionValue: "B-",
                  },
                  {
                    optionLabel: "O+",
                    optionValue: "O+",
                  },
                  {
                    optionLabel: "O-",
                    optionValue: "O-",
                  },
                  {
                    optionLabel: "AB+",
                    optionValue: "AB+",
                  },
                  {
                    optionLabel: "AB-",
                    optionValue: "AB-",
                  },
                ]}
              />
              <button
                className="btn btn-md form__submit"
                onClick={handleRaiseRequest}
              >
                Raise request
              </button>
            </form>
            <p className="form__error raiserequest__container__content__main__form__error">
              {formError}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RaisePlasmaRequests;
