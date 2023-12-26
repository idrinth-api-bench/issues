import {snakeCase} from "change-case";

export const toFilename = (name: string,): string => snakeCase(
  name
    .replace(/[/ ]/ug, '-',)
    .replace(/[^a-z0-9_-]+/ugi, '',),
);
