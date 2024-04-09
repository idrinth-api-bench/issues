/* eslint no-console: 0 */
import {
  parse,
} from 'yaml';
import {
  existsSync,
  readFileSync,
} from 'fs';

const check = (prefix, index, node) => {
  if (typeof node !== 'object') {
    console.error(`[${prefix}${index + 1}] Failed handling node, it's not an object.`,);
    return true;
  }
  const properties = Object.keys(node,);
  if (! properties.includes('text')) {
    console.error(`[${prefix}${index + 1}] Failed handling node, it doesn't contain a text property.`,);
    return true;
  }
  if (typeof node.text !== 'string' || node.text.length === 0) {
    console.error(`[${prefix}${index + 1}] Failed handling node, it doesn't contain a correct text property.`,);
    return true;
  }
  let hasErrors = false;
  if (properties.includes('url',)) {
    if (typeof node.url !== 'string' || node.url.length === 0) {
      console.error(`[${prefix}${node.text}] The url property is not correct.`,);
      hasErrors = true;
    }
  }
  if (properties.includes('description',)) {
    if (typeof node.description !== 'string' || node.description.length === 0) {
      console.error(`[${prefix}${node.text}] The description property is not correct.`,);
      hasErrors = true;
    }
  }
  if (properties.includes('image',)) {
    if (typeof node.image !== 'string' || node.image.length === 0) {
      console.error(`[${prefix}${node.text}] The image property is not correct.`,);
      hasErrors = true;
    } else if (! existsSync(`${ process.cwd() }/assets/${ node.image }`)) {
      console.error(`[${prefix}${node.text}] The image ${ node.image } couldn't be found in assets.`,);
      hasErrors = true;
    }
  }
  if (properties.includes('children',)) {
    if (typeof node.children !== 'object' || ! Array.isArray(node.children) || node.children.length === 0) {
      console.error(`[${prefix}${node.text}] The image property is not correct.`,);
      hasErrors = true;
    } else {
      let pos = 0;
      for (const child of node.children) {
        hasErrors = check(`${prefix}${node.text}/`, pos, child) || hasErrors;
        pos ++;
      }
    }
  }
  const allowedProperties = [
    'text',
    'description',
    'children',
    'url',
    'image'
  ];
  if (properties.filter((name,) => ! allowedProperties.includes(name)).length) {
    console.error(`[${prefix}${node.text}] There are additional properties that are unknown.`,);
    hasErrors = true;
  }
  return hasErrors;
};

try {
  const data = parse(readFileSync(process.cwd() + '/data.yml', 'utf8',));
  if (Object.keys(data).length !== 3 || ! data.text || ! data.children || ! data['$schema']) {
    console.error('You must have three elements at top level: text, $schema and children',);
    process.exit(1);
  }
  let index = 0;
  let hasErrors = false;
  for (const child of data.children) {
    hasErrors = check(data.text + '/', index, child,) || hasErrors;
    index ++;
  }
  process.exit(hasErrors ? 1 : 0,);
} catch(e) {
  console.error(`Your YAML is invalid: ${ e }`,);
  process.exit(1);
}
