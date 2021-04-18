import Link from "next/link";

export const HomepageHero = () => {
  return (
    <div className="homepage__container__content__hero">
      <div className="homepage__container__content__hero__content">
        <h1 className="heading-main homepage__container__content__hero__content__heading">
          Find plasma donors & Covid medicines in your city in 30 seconds
        </h1>
        <p className="paragraph homepage__container__content__hero__content__paragraph">
          You can easily find plasma donors in your city and even if you can't,
          simply raise a request for yourself. The process hardly takes 30
          seconds
        </p>
      </div>
      <div className="homepage__container__content__hero__action">
        <div className="homepage__container__content__hero__action__buttons">
          <Link href="/view-plasma-doners">
            <button className="btn btn-md homepage__container__content__hero__action__buttons__primary">
              Search plasma donors
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const HompageFooter = () => {
  return (
    <div className="homepage__container__content__footer">
      <div className="homepage__container__content__footer__content">
        <div className="homepage__container__content__footer__content__text">
          <h3 className="heading-main homepage__container__content__footer__content__text__heading">
            Want to be a plasma donor?
          </h3>
          <p className="paragraph homepage__container__content__footer__content__text__paragraph">
            You could share your details someone in need would contact you.
          </p>
        </div>

        <div className="homepage__container__content__footer__content__action">
          <Link href="/view-plasma-requests">
            <button className="btn btn-md homepage__container__content__footer__content__action__button__primary">
              View requests
            </button>
          </Link>
          <Link href="/register-doner">
            <button className="btn btn-md homepage__container__content__footer__content__action__button">
              Join as donor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const RaiseRequestForm = ({
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
          Once the request is raised, anyone can see your request and offer you
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

export const JoinAsDonerForm = ({
  handleSetName,
  handleSetPrimaryContactNo,
  handleSetSecondaryContactNo,
  handleSetCity,
  handleSetBloodGroup,
  handleJoinAsDoner,
  formError,
  isJoinDonerButtonClicked,
}) => {
  return (
    <>
      <div className="joinasdoner__container__content__header">
        <h3 className="heading-sub joinasdoner__container__content__header__heading">
          Join as plasma donor
        </h3>
        <p className="paragraph joinasdoner__container__content__header__paragraph">
          Join us as a plasma donor and be a part of a bigger mission of saving
          lives from Covid 19.
        </p>
      </div>

      <div className="joinasdoner__container__content__main">
        <form className="form joinasdoner__container__content__main__form">
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
          <p className="paragraph joinasdoner__container__content__main__form__paragraph">
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
            onClick={handleJoinAsDoner}
          >
            {!isJoinDonerButtonClicked ? "Join as doner" : "Joining"}
          </button>
        </form>
        <p className="form__error joinasdoner__container__content__main__form__error">
          {formError}
        </p>
      </div>
    </>
  );
};

export const RemoveMyRequestContainer = ({
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

export const RequestAddCityContainer = ({
  handleSetCity,
  isRequestRaiseButtonClicked,
  handleRequestAddCityRequest,
  formError,
}) => {
  return (
    <>
      <div className="requestcontentmanage__container__content__header">
        <h3 className="heading-sub requestcontentmanage__container__content__header__heading">
          Request for adding your city
        </h3>
        <p className="paragraph requestcontentmanage__container__content__header__paragraph">
          If you can't see your city while raising a request, fill this form and
          we'll try to add this ASAP
        </p>
      </div>

      <div className="requestcontentmanage__container__content__main">
        <form className="form requestcontentmanage__container__content__main__form">
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
        <p className="form__error requestcontentmanage__container__content__main__form__error">
          {formError}
        </p>
      </div>
    </>
  );
};

export const PlasmaDonerDataContainer = ({
  name,
  bloodGroup,
  city,
  primaryContactNo,
  secondaryContactNo,
}) => {
  return (
    <div className="viewplasmausers__container__content__main__results__container__items__item">
      <div className="viewplasmausers__container__content__main__results__container__items__item__content">
        <h1 className="heading-sub viewplasmausers__container__content__main__results__container__items__item__content__subheading">
          {name}
        </h1>
        {bloodGroup && (
          <h1 className="heading-main viewplasmausers__container__content__main__results__container__items__item__content__heading">
            {bloodGroup}
          </h1>
        )}

        <h1 className="paragraph viewplasmausers__container__content__main__results__container__items__item__content__paragraph">
          {city}
        </h1>
      </div>
      <div className="viewplasmausers__container__content__main__results__container__items__item__action">
        <a href={`tel:${primaryContactNo}`}>
          <button className="btn btn-md viewplasmausers__container__content__main__results__container__items__item__action__button__primary">
            Call
          </button>
        </a>
        {secondaryContactNo && (
          <a href={`tel:${secondaryContactNo}`}>
            <button className="btn btn-md viewplasmausers__container__content__main__results__container__items__item__action__button">
              Other contact
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export const PlasmaRequestDataContainer = ({
  name,
  bloodGroup,
  city,
  primaryContactNo,
  secondaryContactNo,
}) => {
  return (
    <div className="viewplasmausers__container__content__main__results__container__items__item">
      <div className="viewplasmausers__container__content__main__results__container__items__item__content">
        <h1 className="heading-sub viewplasmausers__container__content__main__results__container__items__item__content__subheading">
          {name}
        </h1>
        {bloodGroup && (
          <h1 className="heading-main viewplasmausers__container__content__main__results__container__items__item__content__heading">
            {bloodGroup}
          </h1>
        )}

        <h1 className="paragraph viewplasmausers__container__content__main__results__container__items__item__content__paragraph">
          {city}
        </h1>
      </div>
      <div className="viewplasmausers__container__content__main__results__container__items__item__action">
        <a href={`tel:${primaryContactNo}`}>
          <button className="btn btn-md viewplasmausers__container__content__main__results__container__items__item__action__button__primary">
            Call
          </button>
        </a>
        {secondaryContactNo && (
          <a href={`tel:${secondaryContactNo}`}>
            <button className="btn btn-md viewplasmausers__container__content__main__results__container__items__item__action__button">
              Other contact
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
