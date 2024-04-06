export const get = (key: string,) => localStorage.getItem(
  key + '-consent',
) === 'true';
export const has = (key: string,) => !! localStorage.getItem(key + '-consent',);
export const set = (key: string, value: boolean,) => localStorage.setItem(
  key + '-consent',
  value ? 'true' : 'false',
);
