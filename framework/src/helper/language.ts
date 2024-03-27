import {
  parse,
} from 'yaml';
import {
  readFileSync,
} from 'fs';
import {
  pathExists,
} from 'fs-extra';
import HashMap from '../hashmap.js';
import {
  FRAMEWORK_ROOT,
} from '../constants.js';

const NEXT = 1;

const read = async(lang: string,) : Promise<HashMap> => {
  lang = lang.replace(/-.+$/u, '',).replace(/[^a-z]/gu, '',);
  const file = FRAMEWORK_ROOT + '/language/' + lang + '.yml';
  if (! await pathExists(file,)) {
    return {};
  }
  return parse(readFileSync(file, {
    encoding: 'utf8',
  },), ) as HashMap;
};

const english = await read('en',);

let language = english;
const get = (key: string, ...args: string[]): string => {
  if (typeof language[key] !== 'string') {
    return key;
  }
  let out = language[key];
  for (let pos = 0; pos < args.length; pos ++) {
    out = out.replace(new RegExp(`%${ pos + NEXT }%`, 'gu',), args[pos],);
  }
  return out;
};

export const locale = async(lang: string,) => {
    if (lang === 'en') {
        language = english;
        return;
    }
    language = {
        ...english,
        ...await read(lang,),
    };
};


export default get;