import language from '../helper/language.js';

const assertTypeIsObject = (input: unknown,) => {
  if (typeof input !== 'object') {
    throw new Error(language('openapi_invalid',),);
  }
};

export default assertTypeIsObject;
