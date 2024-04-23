import languageKey from '../locales/language-key.ts';
import Window from './window.ts';
import {
  FIRST_ELEMENT,
  SECOND_ELEMENT,
} from '../constants.ts';
import files from '../locales/files.ts';

// eslint-disable-next-line complexity
export default async(lnkey: languageKey, global?: object,): Promise<string> => {
  if (lnkey.match(/(^|\.)(__proto__|valueOf|toString)(\.|$)/u,)) {
    return '';
  }
  const that: Window = (global ?? window) as Window;
  /*const language = (
    (that?.localStorage?.getItem('language',) || 'en')
    ?? that?.Navigator?.language
    ?? 'en'
  ).replace(/-.*$/u, '',);*/
  let language = (
    that?.localStorage?.getItem('language',) || 'en')
    ?? that?.Navigator?.language ?? 'en';
  language = language.split('-',)[FIRST_ELEMENT];
  const main = lnkey.split('.',)[FIRST_ELEMENT];
  if (! files.includes(`en-${ main }`,)) {
    return lnkey;
  }
  const originals = await import(`../locales/en-${ main }.ts`);
  let output = (files.includes(`${ language }-${ main }`,)
    ? await import(`../locales/${ language }-${ main }.ts`)
    : originals).default;
  let defaultOutput = originals.default;
  if (! output) {
    output = defaultOutput;
  }
  if (! defaultOutput) {
    return lnkey;
  }
  try {
    for (const part of lnkey.split('.',).slice(SECOND_ELEMENT,)) {
      output = output[part] || defaultOutput[part];
      defaultOutput = defaultOutput[part];
    }
    return output || lnkey;
  } catch (E) {
    return lnkey;
  }
};
