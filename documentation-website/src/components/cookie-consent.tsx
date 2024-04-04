import React, {
  useState,
} from 'react';
import './cookie-consent.css';
import Lang from './lang';
import {
  createPortal,
} from 'react-dom';

// eslint-disable-next-line complexity
const CookieConsent = () => {
  const [
    consentWasClosed,
    setConsentWasClosed,
  ] = useState<boolean>(!! localStorage.getItem('consent',),);
  if (consentWasClosed) {
    //@ts-expect-error _paq can be null
    window._paq = window?._paq || [];
    //@ts-expect-error _paq can be null
    window._paq.push([ localStorage.getItem('consent',) === 'true'
      ? 'rememberConsentGiven'
      : 'forgetConsentGiven', ],);
  }

  const handleConsent = (accept: boolean,) => {
    //@ts-expect-error _paq can be null
    window?._paq?.push([ accept
      ? 'rememberConsentGiven'
      : 'forgetConsentGiven', ],);
    localStorage.setItem('consent', accept ? 'true' : 'false',);
    setConsentWasClosed(true,);
  };

  const visible = ! consentWasClosed && ! localStorage.getItem('consent',);

  if (! visible) {
    const forget = () => {
      localStorage.setItem('consent', '',);
      setConsentWasClosed(false,);
    };
    return <button onClick={forget}>
      <Lang lnkey={'cookie-consent.open'}/>
    </button>;
  }

  return createPortal(<div className={'cookie-consent'}>
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
  </div>, document.body,);
};

export default CookieConsent;
