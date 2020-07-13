/* eslint @typescript-eslint/no-var-requires:0 */
import {
  HashMap,
} from '../hashmap';

interface Lock {
  name: string,
  version: string,
  dependencies: {[lib: string]: HashMap}
}

const reqlib: {require: (lib:string) => unknown} = require('app-root-path',);
const lock: Lock = <Lock> reqlib.require('/package-lock.json',);
const main = `${ lock.name }/${ lock.version }`;
const needle = `needle/${ lock.dependencies.needle.version }`;
const self = lock.dependencies['@idrinth/api-bench'] ?
  `@idrinth/api-bench/${ lock.dependencies['@idrinth/api-bench'].version }` :
  '';
export default `${ main } ${ self } ${ needle }`.replace(/ {2}/ug, ' ',);
