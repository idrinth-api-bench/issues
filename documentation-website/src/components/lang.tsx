import languageKey from '../locales/language-key.ts';
import Window from './window.ts';
import {
  FIRST_ELEMENT,
  SECOND_ELEMENT,
} from '../constants.ts';
import React, {
  ComponentType,
  lazy,
  Suspense,
} from 'react';
import files from '../locales/files.ts';

interface LangProps {
  lnkey: languageKey;
  global?: Window
}

// eslint-disable-next-line complexity
export const t = async(lnkey, global) => {
  global = global || window;
  const language = (global?.Navigator?.language ?? 'en')
    .replace(/-.*$/u, '',);
  const main = lnkey.split('.',)[FIRST_ELEMENT];
  if (! files.includes(`en-${ main }`,)) {
    return lnkey;
  }
  const originals = await import(`../locales/en-${ main }.ts`);
  let output = (files.includes(`${ language }-${ main }`,)
    ? await import(`../locales/${ language }-${ main }.ts`)
    : originals).default;
  let defaultOutput = originals.default;
  for (const part of lnkey.split('.',).slice(SECOND_ELEMENT,)) {
    output = output[part] || defaultOutput[part];
    defaultOutput = defaultOutput[part];
  }
  return output || lnkey;
};

export const Lang = ({
  lnkey,
  global,
}: LangProps,) => {
  const LE = lazy(async(): Promise<{default: ComponentType<unknown>;}> => {
    const text = await t(lnkey, global,);
    return {
      default: () => <>{ text }</>,
    };
  },);
  return <Suspense fallback={''}><LE/></Suspense>;
};
