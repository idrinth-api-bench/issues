import React, { useState } from "react";
import "./cookie-consent.css";
import { Lang } from "./lang";

const CookieConsent = () => {
  const [consentWasClosed, setConsentWasClosed] = useState<boolean>(false);

  function handleConsent(accept: boolean) {
    {/*@ts-expect-error _paq can be null on top level*/}
    window._paq.push([accept ? "rememberConsentGiven" : "forgetConsentGiven"]);
    localStorage.setItem("consent-was-asked", "yes");
    setConsentWasClosed(true);
  };

  return (
    <>
      {!consentWasClosed && (
        <div className={"cookie-consent"}>
          <div className={"cookie-consent-description"}>
            <h2 className={"cookie-title"}>
            <Lang lnkey={"cookie-consent.title"}/>
            </h2>
            <p className={"cookie-description"} >
              <Lang lnkey={"cookie-consent.description"}/>
            </p>
          </div>
          <div className={"cookie-consent-buttons"}>
            <button
              onClick={() => handleConsent(true)}
              className={"cookie-consent-accept-button"}
            >
              <Lang lnkey={"cookie-consent.accept"}/>
            </button>
            <button
              onClick={() => handleConsent(false)}
              className={"cookie-consent-decline-button"}
            >
              <Lang lnkey={"cookie-consent.decline"}/>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
