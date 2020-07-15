/* eslint @typescript-eslint/no-var-requires:0 */
interface Versioned {
  version: string;
}
interface Lock extends Versioned{
  name: string;
  dependencies: {[lib: string]: Versioned};
}

const version = (obj: Versioned,) => obj.version.replace(/\.\d+$/u, '',);

const reqlib: {require: (lib:string) => unknown} = require('app-root-path',);
const lock: Lock = <Lock> reqlib.require('/package-lock.json',);
const main = `${ lock.name }/${ version(lock,) }`;
const needle = `needle/${ version(lock.dependencies.needle,) }`;
const self = lock.dependencies['@idrinth/api-bench'] ?
  `@idrinth/api-bench/${ version(lock.dependencies['@idrinth/api-bench'],) }` :
  '';
export default `${ main } ${ self } ${ needle }`.replace(/ {2}/ug, ' ',);
