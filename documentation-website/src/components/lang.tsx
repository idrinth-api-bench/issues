import languageKey from '../locales/language-key.ts';
import Window from './window.ts';
import React, {
  ComponentType,
  lazy,
  Suspense,
} from 'react';
import t from './t.ts';

interface LangProps {
  lnkey: languageKey;
  global?: Window
}

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
