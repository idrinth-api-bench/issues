import {
  snakeCase,
} from 'change-case';
import {
  FIRST,
  STRING_LIMITER_REMOVAL_START,
  STRING_LIMITER_REMOVAL_LENGTH,
} from '../constants.js';
import language from './language.js';

export interface Param {
    name: string;
    type: string;
    default: string;
    value: string|number|boolean;
    envName: string;
}

const getEnv = (name: string, defaultValue: string,): string => {
  for (const key of Object.keys(process.env,)) {
    if (key.toUpperCase() === name) {
      return process.env[key];
    }
  }
  return defaultValue;
};

// eslint-disable-next-line complexity
const buildRegExp1=/\/\*.+\*\/.+=.+/u;
const buildRegExp2=/\/\*.+\*\/.+/u;
const buildRegExp3=/.+=.+/u;
const nameRegExp1=/\/\*.+\*\/|=.+$/gu;
const nameRegExp2=/\s*/gu;
const defaultRegExp1=/^.+=/u;
const defaultRegExp2=/^\s*|\s*$/gu;
const typeRegExp1=/^.*\/\*|\*\/.+$/gu;
const typeRegExp2=/\s*/gu;
const buildParameter = (parameter: string,): Param => {
  const value: Param = {
    name: '',
    type: 'string',
    default: '',
    value: '',
    envName: '',
  };
  if (buildRegExp1.exec(parameter,)) {
    value.name = parameter
      .replace(nameRegExp1, '',)
      .replace(nameRegExp2, '',);
    value.default = parameter
      .replace(defaultRegExp1, '',)
      .replace(defaultRegExp2, '',);
    value.type = parameter
      .replace(typeRegExp1, '',)
      .replace(typeRegExp2, '',)
      .toLowerCase();
    return value;
  }
  if (buildRegExp2.exec(parameter,)) {
    value.name = parameter
      .replace(nameRegExp1, '',)
      .replace(nameRegExp2, '',);
    value.default = '';
    value.type = parameter
      .replace(typeRegExp1, '',)
      .replace(typeRegExp2, '',)
      .toLowerCase();
    if (value.type === 'boolean') {
      value.default = 'false';
    } else if (value.type === 'number') {
      value.default = '0';
    }
    return value;
  }
  if (buildRegExp3.exec(parameter,)) {
    value.name = parameter
      .replace(nameRegExp1, '',)
      .replace(nameRegExp2, '',);
    value.default = parameter
      .replace(defaultRegExp1, '',)
      .replace(defaultRegExp2, '',);
    if (! Number.isNaN(Number.parseFloat(value.default,),)) {
      value.type = 'number';
    } else if (value.default === 'true' || value.default === 'false') {
      value.type = 'boolean';
    }
    return value;
  }
  value.name = parameter.replace(nameRegExp2, '',);
  return value;
};
// eslint-disable-next-line complexity
const parseParameterString = (parameter: string,): Param => {
  const value = buildParameter(parameter,);
  value.envName = snakeCase(value.name,).toUpperCase();
  switch (value.type) {
    case 'number':
      value.value = Number.parseFloat(getEnv(value.envName, value.default,),);
      break;
    case 'bool':
    case 'boolean':
      value.value = getEnv(value.envName, value.default,).toLowerCase();
      value.value = value.value === 'true' || value.value === '1';
      break;
    case 'string':
    default:
      if (value.default !== '') {
        if (value.default[FIRST] !== '"' && value.default[FIRST] !== '\'') {
          throw new Error(language('variable_default_value', value.name,),);
        }
        value.default = value.default
          .substring(
            STRING_LIMITER_REMOVAL_START,
            value.default.length-STRING_LIMITER_REMOVAL_LENGTH,
          );
      }
      value.value = getEnv(value.envName, value.default,);
      break;
  }
  return value;
};
// eslint-disable-next-line @typescript-eslint/ban-types
const analyzeRegExp=/\s*function\s*/u;
export const analyze = (func: Function,): Param[] => {
  const parameters: string[] = ((): string[] => {
    const fun: string = func.toString().replace(/[\r\n]/gu, ' ',);
    if (analyzeRegExp.exec(fun,)) {
      return fun
        .replace(/^function\s*\(|\)\s*\{.*\}\s*$/gu, '',)
        .split(',',);
    }
    return fun
      .replace(/^\s*\(|\)\s*=>\s*.*$/gu, '',)
      .split(',',);
  })();
  const ret: Param[] = [];
  for (const parameter of parameters) {
    const value = parseParameterString(parameter,);
    if (value.name !== '') {
      ret.push(value,);
    }
  }
  return ret;
};

export default analyze;
