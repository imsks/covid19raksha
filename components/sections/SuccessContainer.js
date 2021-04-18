import React from "react";

const SuccessContainer = (props) => {
  const { heading, paragraph, redirectUrl, ctaText = "Back to home" } = props;

  return (
    <div className="tasksuccess">
      <div className="tasksuccess__container">
        <img
          src="../assets/images/success-icon.png"
          className="tasksuccess__container__image"
        />
        <h3 className="heading-sub tasksuccess__container__heading">
          {heading}
        </h3>
        <p className="paragraph--sub tasksuccess__container__paragraph">
          {paragraph}
        </p>
        <a href={redirectUrl}>
          <button className="btn btn-md tasksuccess__container__button">
            {ctaText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default SuccessContainer;
