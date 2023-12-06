import reqlib from 'app-root-path';
interface Versioned {
  version: string;
}
interface Lock extends Versioned{
  name: string;
  packages: {[lib: string]: Versioned};
}

const version = (ob: Versioned,): string => {
  if (! ob) {
    return '0.0';
  }
  if (! ob.version) {
    return '0.0';
  }
  return ob.version.replace(/\.\d+$/u, '',);
};

const lock: Lock = reqlib.require('/package-lock.json',) as Lock;
const main = `${ lock.name }/${ version(lock,) }`;
const needle = `needle/${ version(lock.packages['node_mopdules/needle'],) }`;
const selfName = 'node_modules/@idrinth/api-bench';
const self = lock.packages['node_modules/@idrinth/api-bench'] ?
  `@idrinth/api-bench/${ version(lock.packages[selfName],) }` :
  '';
export default `${ main } ${ self } ${ needle }`.replace(/ {2}/ug, ' ',);
