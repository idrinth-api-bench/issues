import {
  snakeCase,
} from 'snake-case';

export interface Param {
    name: string;
    type: string;
    default: string;
    value: string|number|boolean;
    envName: string;
}

function getEnv(name: string,): string|undefined {
  for (const key of Object.keys(process.env,)) {
    if (key.toUpperCase() === name) {
      return process[key];
    }
  }
  // eslint-disable-next-line no-undefined
  return undefined;
}

export function analyze(func: Function,): Param[] {
  const parameters = func.toString()
    .replace(/\r|\n/gu, ' ',)
    .replace(/^function\s*\(|\)\s*{.*}\s*$/gu, '',)
    .split(',',);
  const ret = [];
  for (const parameter of parameters) {
    const value: Param = {
      name: '',
      type: '',
      default: '',
      value: '',
      envName: '',
    };
    if (parameter.match(/\/\*.+\*\/.+=.+/u,)) {
      value.name = parameter.replace(/\/\*.+\*\/|=.+$/gu, '',).replace(/\s*/gu, '',);
      value.default = parameter.replace(/^.+=/u, '',).replace(/^\s*|\s*$/gu, '',);
      value.type = parameter.replace(/^.*\/\*|\*\/.+$/gu, '',).replace(/\s*/gu, '',)
        .toLowerCase();
    } else if (parameter.match(/\/\*.+\*\/.+/u,)) {
      value.name = parameter.replace(/\/\*.+\*\/|=.+$/gu, '',).replace(/\s*/gu, '',);
      value.default = '';
      value.type = parameter.replace(/^.*\/\*|\*\/.+$/gu, '',).replace(/\s*/gu, '',)
        .toLowerCase();
      if (value.type === 'boolean') {
        value.default = 'false';
      } else if (value.type === 'number') {
        value.default = '0';
      }
    } else if (parameter.match(/.+=.+/u,)) {
      value.name = parameter.replace(/\/\*.+\*\/|=.+$/gu, '',).replace(/\s*/gu, '',);
      value.default = parameter.replace(/^.+=/u, '',).replace(/^\s*|\s*$/gu, '',);
      value.type = 'string';
      if (! Number.isNaN(Number.parseFloat(value.default,),)) {
        value.type = 'number';
      } else if (value.default === 'true' || value.default === 'false') {
        value.type = 'boolean';
      }
    } else {
      value.name = parameter.replace(/\s*/gu, '',);
      value.default = '';
      value.type = 'string';
    }
    value.envName = snakeCase(value.name,).toUpperCase();
    switch (value.type) {
    case 'number':
      value.value = Number.parseFloat(getEnv(value.name,) || value.default,);
      break;
    case 'bool':
    case 'boolean':
      // eslint-disable-next-line no-undefined
      value.value = getEnv(value.name,)===undefined ? value.default==='true' : getEnv(value.name,)==='true';
      break;
    case 'string':
    default:
      // eslint-disable-next-line no-magic-numbers
      value.default = value.default.substr(1, value.default.length-2,);
      value.value = getEnv(value.name,) || value.default;
      break;
    }
    ret.push(value,);
  }
  return ret;
}
