import {
  BASE_10_RADIX,
} from '../../constants.js';

export default (value: string,) => {
  if (value.match(/^\d+$/u,)) {
    return Number.parseInt(value, BASE_10_RADIX,);
  }
  return value;
};
