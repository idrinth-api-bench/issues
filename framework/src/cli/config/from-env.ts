import Hashmap from '../../hashmap.js';
import {
  FIVE,
} from '../../constants.js';
import Config from './config.js';
import {
  camelCase,
} from 'change-case';
import toValue from './to-value.js';

// eslint-disable-next-line complexity
export default (config: Config, env: Hashmap,) => {
  for (const key of Object.keys(env,)) {
    if (key.startsWith('IAB_',)) {
      config[camelCase(key.substring(FIVE,),)] = toValue(env[key],);
    }
  }
};
