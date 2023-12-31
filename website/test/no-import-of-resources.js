const extensionsRegex = /\.(s?css|svg|png|jpe?g|gif)$/u;

export async function load(url, context, nextLoad,) {
  if (extensionsRegex.test(url,)) {
    return {
      format: 'module',
      shortCircuit: true,
      source: 'export default {}',
    };
  }
  return nextLoad(url,);
}
