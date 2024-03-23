const extensionsRegex = /\.(s?css|svg|png|jpe?g|gif)$/u;

// eslint-disable-next-line require-await
export const load = async(url, context, nextLoad,) => {
  if (extensionsRegex.test(url,)) {
    return {
      format: 'module',
      shortCircuit: true,
      source: 'export default {}',
    };
  }
  return nextLoad(url,);
};
