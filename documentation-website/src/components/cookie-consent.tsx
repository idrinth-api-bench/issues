import React, { useState } from "react";
import "./cookie-consest.css";

const CookieConsent = () => {
  const [consentWasClosed, setConsentWasClosed] = useState<boolean>(false);

  const handleConsent = (accept: boolean) => {
     {/* @ts-ignore  */}
    window._paq.push([accept ? "rememberConsentGiven" : "forgetConsentGiven"]);
    localStorage.setItem("consest-was-asked", "yes");
    setConsentWasClosed(true);
  };

  return (
    <>
      {!consentWasClosed && (
        <div className={"cookie-consest"}>
          <div className={"cookie-consest-description"}>
            <h2>We use Cookies</h2>
            <p>
              We use cookies to improve your browsing experience and for
              marketing purposes.
            </p>
          </div>
          <div className={"cookie-consest-buttons"}>
            <button
              onClick={() => handleConsent(true)}
              className={"cookie-consest-accept-button"}
            >
              Accept
            </button>
            <button
              onClick={() => handleConsent(false)}
              className={"cookie-consest-decline-button"}
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
