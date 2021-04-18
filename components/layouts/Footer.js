import React from "react";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="footer__content">
        <div className="footer__content__about">
          <p className="paragraph footer__content__about__paragraph">
            Made by <a href="https://www.sachinshukla.me" className="footer__content__about__paragraph__link">Sachin</a>
          </p>
        </div>
        <div className="footer__content__links">
          <a href="/remove-my-request" className="footer__content__links__item">Remove my request</a>
          <a href="tel:8072937581" className="footer__content__links__item">Contact us</a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
