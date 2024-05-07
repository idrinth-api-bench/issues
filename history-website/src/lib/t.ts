import type languageKey from '../locales/language-key.js';
import files from '../locales/files.js';
import translations from '../locales/translations.js';

// eslint-disable-next-line complexity
export default (lnkey: languageKey,): string => {
  if (lnkey.match(/(^|\.)(__proto__|valueOf|toString)(\.|$)/u,)) {
    return lnkey;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const language = (Navigator?.language ?? 'en')
    .replace(/-.*$/u, '',);
  const originals = translations.en;
  let output = files.includes(language,)
    ? translations[language]
    : originals;
  let defaultOutput = originals;
  for (const part of lnkey.split('.',)) {
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
