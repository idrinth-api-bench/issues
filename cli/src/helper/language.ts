import {
  DEFAULT_LANGUAGE,
  NEXT,
} from '../constants.js';
import languages from '../locales/languages.js';
import languageKey from '../locales/language-key.js';
import en from '../locales/en.js';

let language = DEFAULT_LANGUAGE;
let chosen = en;
const regs = [];

const getReplace = (index: number,) => {
  if (typeof regs[index] === 'undefined') {
    regs[index] = new RegExp(`%${ index + NEXT }%`, 'gu',);
  }
  return regs[index];
};

const get = (key: languageKey, ...args: string[]): string => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (key === '__proto__') {
    return key;
  }
  let out = chosen[key] || en[key] || key;
  for (let pos = 0; pos < args.length; pos ++) {
    out = out.replace(getReplace(pos,), args[pos],);
  }
  return out;
};

export const locale = async(lang: string,) => {
  language = DEFAULT_LANGUAGE;
  chosen = en;
  if (languages.includes(lang,)) {
    language = lang;
    chosen = (await import(`../locales/${ language }.js`,)).default;
  }
};

export default get;
