import type languageKey from '../locales/language-key.js';
import {
  FIRST_ELEMENT,
  SECOND_ELEMENT,
} from './constants.js';
import files from '../locales/files.js';
import translations from '../locales/translations.js';

// eslint-disable-next-line complexity
export default (lnkey: languageKey,): string => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const language = (Navigator?.language ?? 'en')
    .replace(/-.*$/u, '',);
  const main = lnkey.split('.',)[FIRST_ELEMENT];
  if (! files.includes(`en-${ main }`,)) {
    return lnkey;
  }
  const keyEn = `en-${ main }` as keyof typeof translations;
  const keyTr = `${ language }-${ main }` as keyof typeof translations;
  const originals = translations[keyEn];
  let output = files.includes(keyTr,)
    ? translations[keyTr]
    : originals;
  let defaultOutput = originals;
  for (const part of lnkey.split('.',).slice(SECOND_ELEMENT,)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    output = output[part] || defaultOutput[part];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    defaultOutput = defaultOutput[part];
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return output || lnkey;
};
