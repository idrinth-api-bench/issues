const extensionsRegex = /\.(s?css|svg|png|jpe?g|gif)$/u;
// eslint-disable-next-line max-len
const pathRegex = /node_modules\/react-syntax-highlighter\/dist\/esm\/languages\/hljs\/[^/]+$/u;

// eslint-disable-next-line require-await
export const load = async(url, context, nextLoad,) => {
  if (extensionsRegex.test(url,)) {
    return {
      format: 'module',
      shortCircuit: true,
      source: 'export default {}',
    };
  }
  if (pathRegex.test(url,)) {
    return {
      format: 'module',
      shortCircuit: true,
      source: 'export default () => {' +
        'return {' +
        'name: \'replaced\',' +
        'case_insensitive: true,' +
        'keywords: {},' +
        'contains: []' +
        '};};',
    };
  }
  return nextLoad(url,);
};
