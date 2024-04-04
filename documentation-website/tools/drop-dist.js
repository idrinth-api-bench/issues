import {
  unlinkSync,
  readdirSync,
  rmdirSync,
  statSync,
  existsSync,
} from 'fs';

const del = (path,) => {
  if (! existsSync(path,)) {
    return;
  }
  const stats = statSync(path,);
  if (stats.isDirectory()) {
    for (const file of readdirSync(path,)) {
      del(`${ path }/${ file }`,);
    }
    rmdirSync(path,);
    return;
  }
  unlinkSync(path,);
};

del(process.cwd() + '/dist',);
