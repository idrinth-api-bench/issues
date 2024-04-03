import React, {
  useState,
} from 'react';
import './cookie-consent.css';
import {
  Lang,
} from './lang';

const CookieConsent = () => {
  const [
    consentWasClosed,
    setConsentWasClosed,
  ] = useState<boolean>(false,);

  const handleConsent = (accept: boolean,) => {
    const action = accept ? 'rememberConsentGiven' : 'forgetConsentGiven';
    //@ts-expect-error _paq can be null
    window?._paq.push([ action, ],);
    localStorage.setItem('consent-was-asked', 'yes',);
    setConsentWasClosed(true,);
  };

  const visible = ! consentWasClosed &&
  //@ts-expect-error _paq can be null
  (! localStorage.getItem('consent-was-asked',) && window?._paq);

  return visible ?
    <div className={'cookie-consent'}>
      <div className={'cookie-consent-description'}>
        <h2 className={'cookie-title'}>
          <Lang lnkey={'cookie-consent.title'} />
        </h2>
        <p className={'cookie-description'}>
          <Lang lnkey={'cookie-consent.description'} />
        </p>
      </div>
      <div className={'cookie-consent-buttons'}>
        <button
          onClick={() => handleConsent(true,)}
          className={'cookie-consent-accept-button'}
        >
          <Lang lnkey={'cookie-consent.accept'} />
        </button>
        <button
          onClick={() => handleConsent(false,)}
          className={'cookie-consent-decline-button'}
        >
          <Lang lnkey={'cookie-consent.decline'} />
        </button>
      </div>
    </div>
    : null;
};

export default CookieConsent;
