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

export const Lang = ({
  lnkey,
  global,
}: LangProps,) => {
  const LazyElement = lazy(async(): Promise<{default: ComponentType<unknown>;}> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global = global || window;
    const language = (global?.Navigator?.language || 'en').replace(/-.*$/u, '');
    const main = lnkey.split('.',)[FIRST_ELEMENT];
    if (! files.includes(`en-${main}`)) {
      return {default: () => <>lnkey</>};
    }
    const originals = await import(`../locales/en-${main}.ts`);
    let output = (files.includes(`${language}-${main}`,)
      ? await import(`../locales/${language}-${main}.ts`)
      : originals).default;
    let defaultOutput = originals.default;
    for (const part of lnkey.split('.',).slice(SECOND_ELEMENT)) {
      output = output[part] || defaultOutput[part];
      defaultOutput = defaultOutput[part];
    }
    return {default: () => <>{output || lnkey}</>};
  },);
  return <Suspense fallback={''}><LazyElement/></Suspense>;
};
