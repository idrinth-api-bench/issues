import React, { useState } from "react";
import "./cookie-consent.css";

const CookieConsent = () => {
  const [consentWasClosed, setConsentWasClosed] = useState<boolean>(false);

  const handleConsent = (accept: boolean) => {
     {/* @ts-ignore  */}
    window._paq.push([accept ? "rememberConsentGiven" : "forgetConsentGiven"]);
    localStorage.setItem("consent-was-asked", "yes");
    setConsentWasClosed(true);
  };

  return (
    <>
      {!consentWasClosed && (
        <div className={"cookie-consent"}>
          <div className={"cookie-consent-description"}>
            <h2 className={"cookie-title"}>We use Cookies</h2>
            <p className={"cookie-description"} >
              We use cookies to improve your browsing experience and for
              marketing purposes.
            </p>
          </div>
          <div className={"cookie-consent-buttons"}>
            <button
              onClick={() => handleConsent(true)}
              className={"cookie-consent-accept-button"}
            >
              Accept
            </button>
            <button
              onClick={() => handleConsent(false)}
              className={"cookie-consent-decline-button"}
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
