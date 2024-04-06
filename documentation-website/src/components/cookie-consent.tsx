import React, {
  useState,
} from 'react';
import './cookie-consent.css';
import Lang from './lang';
import {
  createPortal,
} from 'react-dom';
import {
  EMPTY,
} from '../constants.ts';
import {
  has,
  get,
  set,
} from './local-consent-storage.ts';
import CookieConsentService from "./cookie-consent-service.tsx";

// eslint-disable-next-line complexity
const CookieConsent = () => {
  const types = [
    'youtube',
    'tracking',
  ];
  let wasAllAnswered = true;
  for (const type of types) {
    wasAllAnswered = wasAllAnswered && has(type,);
  }
  const [
    consentWasClosed,
    setConsentWasClosed,
  ] = useState<boolean>(wasAllAnswered,);
  if (consentWasClosed) {
    //@ts-expect-error _paq can be null
    window._paq = window?._paq || [];
    //@ts-expect-error _paq can be null
    window._paq.push([ get('tracking',)
      ? 'rememberConsentGiven'
      : 'forgetConsentGiven', ],);
  }

  const handleConsent = (accept: null|boolean,) => {
    if (typeof accept === 'boolean') {
      const elements = document
        .getElementById('consent-choices',)
        ?.getElementsByTagName('input',);
      for (let i = 0; i < (elements?.length ?? EMPTY); i ++) {
        const element = elements?.item(i,);
        if (element) {
          element.checked = accept;
        }
      }
      accept = null;
    }
    for  (const type  of types) {
      const allow = document
        .getElementById(type + '-consent',)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ?.checked;
      set(type, allow);
    }
    //@ts-expect-error _paq can be null
    window?._paq?.push([ get('tracking',)
      ? 'rememberConsentGiven'
      : 'forgetConsentGiven', ],);
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
    <ul id={'consent-choices'}>
      <CookieConsentService>tracking</CookieConsentService>
      <CookieConsentService>youtube</CookieConsentService>
    </ul>
    <div className={'cookie-consent-buttons'}>
      <button
        onClick={() => handleConsent(true,)}
        className={'cookie-consent-accept-button'}
      >
        <Lang lnkey={'cookie-consent.accept'}/>
      </button>
      <button
        onClick={() => handleConsent(null,)}
        className={'cookie-consent-custom-button'}
      >
        <Lang lnkey={'cookie-consent.custom'}/>
      </button>
      <button
        onClick={() => handleConsent(false,)}
        className={'cookie-consent-decline-button'}
      >
        <Lang lnkey={'cookie-consent.decline'}/>
      </button>
    </div>
  </div>, document.body,);
};

export default CookieConsent;
