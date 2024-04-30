import React, {
  useState,
} from 'react';
import {
  get,
} from './local-consent-storage.ts';
import {
  FIRST_ELEMENT,
} from '../constants.ts';

const Airtime = () => {
  const [
    allowed,
    setAllowed,
  ] = useState<boolean>(get('airtime',),);
  if (! allowed) {
    document.body.addEventListener('consentChanged', (event,) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (event?.detail?.key === 'airtime') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setAllowed(event?.detail?.value ?? false,);
      }
    },);
    return <></>;
  }
  const airtime = document.getElementById('airtime-script',) ?? (() => {
    const script = document.createElement('script',);
    script.src = 'https://airtimeux.com/airtime.js';
    script.id = 'airtime-script';
    return script;
  })();
  document.getElementsByTagName('head',)[FIRST_ELEMENT].appendChild(airtime,);
  return <script src={'https://airtimeux.com/airtime.js'}></script>;
};

export default Airtime;
