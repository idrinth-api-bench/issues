import {
  kebabCase,
} from 'change-case';

const toFilename = (name: string,): string => kebabCase(
  name
    .replace(/(^\s+)|(\s+$)/ug, '',)
    .replace(/[/ ]/ug, '-',)
    .replace(/[^a-z0-9_-]+/ugi, '',),
);

export default toFilename;
