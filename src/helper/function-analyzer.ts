import {
  snakeCase,
} from 'change-case';

export interface Param {
    name: string;
    type: string;
    default: string;
    value: string|number|boolean;
    envName: string;
}

const STRING_LIMITER_REMOVAL_START = 1;
const STRING_LIMITER_REMOVAL_LENGTH = 2;

const getEnv = (name: string, defaultValue: string,): string => {
  for (const key of Object.keys(process.env,)) {
    if (key.toUpperCase() === name) {
      return process.env[key];
    }
  }
  return defaultValue;
};

// eslint-disable-next-line complexity
const buildParameter = (parameter: string,): Param => {
  const value: Param = {
    name: '',
    type: 'string',
    default: '',
    value: '',
    envName: '',
  };
  if (parameter.match(/\/\*.+\*\/.+=.+/u,)) {
    value.name = parameter
      .replace(/\/\*.+\*\/|=.+$/gu, '',)
      .replace(/\s*/gu, '',);
    value.default = parameter
      .replace(/^.+=/u, '',)
      .replace(/^\s*|\s*$/gu, '',);
    value.type = parameter
      .replace(/^.*\/\*|\*\/.+$/gu, '',)
      .replace(/\s*/gu, '',)
      .toLowerCase();
    return value;
  }
  if (parameter.match(/\/\*.+\*\/.+/u,)) {
    value.name = parameter
      .replace(/\/\*.+\*\/|=.+$/gu, '',)
      .replace(/\s*/gu, '',);
    value.default = '';
    value.type = parameter
      .replace(/^.*\/\*|\*\/.+$/gu, '',)
      .replace(/\s*/gu, '',)
      .toLowerCase();
    if (value.type === 'boolean') {
      value.default = 'false';
    } else if (value.type === 'number') {
      value.default = '0';
    }
    return value;
  }
  if (parameter.match(/.+=.+/u,)) {
    value.name = parameter
      .replace(/\/\*.+\*\/|=.+$/gu, '',)
      .replace(/\s*/gu, '',);
    value.default = parameter
      .replace(/^.+=/u, '',)
      .replace(/^\s*|\s*$/gu, '',);
    if (! Number.isNaN(Number.parseFloat(value.default,),)) {
      value.type = 'number';
    } else if (value.default === 'true' || value.default === 'false') {
      value.type = 'boolean';
    }
    return value;
  }
  value.name = parameter.replace(/\s*/gu, '',);
  return value;
};
const parseParameterString = (parameter: string,): Param => {
  const value = buildParameter(parameter,);
  value.envName = snakeCase(value.name,).toUpperCase();
  switch (value.type) {
    case 'number':
      value.value = Number.parseFloat(getEnv(value.name, value.default,),);
      break;
    case 'bool':
    case 'boolean':
      value.value = getEnv(value.name, value.default,) === 'true';
      break;
    case 'string':
    default:
      value.default = value.default
        .substring(
          STRING_LIMITER_REMOVAL_START,
          value.default.length-STRING_LIMITER_REMOVAL_LENGTH,
        );
      value.value = getEnv(value.name, value.default,);
      break;
  }
  return value;
};
// eslint-disable-next-line @typescript-eslint/ban-types
export const analyze = (func: Function,): Param[] => {
  const parameters: string[] = ((): string[] => {
    const fun: string = func.toString().replace(/[\r\n]/gu, ' ',);
    if (fun.match(/\s*function\s*/u,)) {
      return fun
        .replace(/^function\s*\(|\)\s*\{.*\}\s*$/gu, '',)
        .split(',',);
    }
    return fun
      .replace(/^\s*\(|\)\s*=>\s*\{.*\}\s*$/gu, '',)
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
