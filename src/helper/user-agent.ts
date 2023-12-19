import reqlib from 'app-root-path';
interface Versioned {
  version: string;
}
interface Lock extends Versioned{
  name: string;
  packages: {[lib: string]: Versioned};
}

const formatVersion = (ob: Versioned,): string => {
  if (! ob) {
    return '0.0';
  }
  if (! ob.version) {
    return '0.0';
  }
  return ob.version.replace(/\.\d+$/u, '',);
};
const getVersion = (name: string, lock: Lock): string => {
  if (typeof lock[name] === 'object') {
    return formatVersion(lock[name]);
  }
  if (typeof lock['node_modules/' + name] === 'object') {
    return formatVersion(lock['node_modules/' + name]);
  }
  return '0.0';
};

const lock: Lock = reqlib.require('/package-lock.json',) as Lock;
const main = `${ lock.name }/${ formatVersion(lock,) }`;
const needle = `needle/${ getVersion('needle', lock,) }`;
const self = `@idrinth/api-bench/${ getVersion('@idrinth/api-bench', lock,) }`;
export default `${ main } ${ self } ${ needle }`.replace(/ {2}/ug, ' ',);
