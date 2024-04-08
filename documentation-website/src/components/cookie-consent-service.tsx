import React, {
  lazy,
  Suspense,
} from 'react';
import {
  get,
} from './local-consent-storage.ts';
import Lang from './lang.tsx';
import languageKey from '../locales/language-key.ts';
import t from './t.ts';

const CookieConsentService = ({
  children,
}: {children: string},) => {
  const EL = lazy(async() => {
    const title = await t(
      `cookie-consent.service.${ children }.description` as languageKey,
    );
    return {
      default: () => <label
        htmlFor={children + '-consent'}
        title={title}
      >
        <Lang lnkey={
          `cookie-consent.service.${ children }.title` as languageKey
        }/>
      </label>,
    };
  },);
  return <li key={children + '-consent'} className={'service'}>
    <input
      id={children + '-consent'}
      type={'checkbox'}
      defaultChecked={get(children,)}
    />
    <Suspense fallback={<label
      htmlFor={children + '-consent'}
    >
      <Lang lnkey={`cookie-consent.service.${ children
      }.title` as languageKey}/>
    </label>}><EL/></Suspense>
  </li>;
};

export default CookieConsentService;
