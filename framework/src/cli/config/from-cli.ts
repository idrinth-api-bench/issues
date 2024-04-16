import {
  CLI_OPTION_MIN_LENGTH,
  FIRST,
  SECOND,
  TWO,
} from '../../constants.js';
import Config from './config.js';
import toValue from './to-value.js';

export default (config: Config, args: string[],) => {
  const options = args.filter(
    (option,) => option.startsWith('--',)
      && option.length >= CLI_OPTION_MIN_LENGTH,
  );
  for (const option of options) {
    const parts = option.split('=',);
    if (parts.length === TWO) {
      config[parts[FIRST]] = toValue(parts[SECOND],);
    }
  }
};
