/* eslint no-console: 0 */
import {
  parse,
} from 'yaml';
import {
  existsSync,
  readFileSync,
} from 'fs';

const HUMAN_OFFSET = 1;
const EMPTY = 0;
const EXIT_FAILURE = 1;
const TOP_LEVEL_PROPERTY_COUNT = 3;
const isFilledArray = (value,) => typeof value === 'object'
  && Array.isArray(value,)
  && value.length !== EMPTY;
const isFilledString = (value,) => typeof value === 'string'
  && value.length !== EMPTY;
// eslint-disable-next-line complexity
const check = (prefix, index, node,) => {
  const path = `${ prefix }${ index + HUMAN_OFFSET }`;
  if (typeof node !== 'object') {
    console.error(`[${ path }] Failed handling node, it's not an object.`,);
    return;
  }
  const properties = Object.keys(node,);
  if (! properties.includes('text',)) {
    console.error(
      `[${ path }] Failed handling node, it doesn't contain a text property`,
    );
    return;
  }
  if (! isFilledString(node.text,)) {
    console.error(
      `[${ path }] text needs to be a filled string`,
    );
    return;
  }
  const name = `${ prefix }${ node.text }`;
  if (properties.includes('url',)) {
    if (! isFilledString(node.url,)) {
      console.error(`[${ name }] The url property is not a filled string`,);
      process.exitCode = EXIT_FAILURE;
    }
  }
  if (properties.includes('description',)) {
    if (! isFilledString(node.description,)) {
      console.error(
        `[${ name }] The description property is not a filled string.`,
      );
      process.exitCode = EXIT_FAILURE;
    }
  }
  if (properties.includes('image',)) {
    if (! isFilledString(node.image,)) {
      console.error(`[${ name }] The image property is not a filled string.`,);
      process.exitCode = EXIT_FAILURE;
    } else if (! existsSync(`${ process.cwd() }/assets/${ node.image }`,)) {
      console.error(
        `[${ name }] The image ${ node.image } couldn't be found in assets.`,
      );
      process.exitCode = EXIT_FAILURE;
    }
  }
  if (properties.includes('children',)) {
    if (! isFilledArray(node.children,)) {
      console.error(`[${ name }] The children property is not a filled list`,);
      process.exitCode = EXIT_FAILURE;
    } else {
      let pos = 0;
      for (const child of node.children) {
        check(`${ name }/`, pos, child,);
        pos ++;
      }
    }
  }
  const allowed = [
    'text',
    'description',
    'children',
    'url',
    'image',
  ];
  if (properties.filter((prop,) => ! allowed.includes(prop,),).length) {
    console.error(
      `[${ name }] There are additional properties that are unknown.`,
    );
    process.exitCode = EXIT_FAILURE;
  }
};

try {
  const data = parse(readFileSync(process.cwd() + '/data.yml', 'utf8',),);
  if (Object.keys(data,).length !== TOP_LEVEL_PROPERTY_COUNT) {
    console.error(
      'You must have three elements at top level: text, $schema and children',
    );
    process.exitCode = EXIT_FAILURE;
  }
  if (! isFilledString(data.text,)) {
    console.error('text has to be a string',);
    process.exitCode = EXIT_FAILURE;
  }
  if ( ! isFilledString(data.$schema,)) {
    console.error('$schema has to be a string',);
    process.exitCode = EXIT_FAILURE;
  }
  if (! isFilledArray(data.children,)) {
    console.error('children have to be a list',);
    process.exitCode = EXIT_FAILURE;
  } else {
    let index = 0;
    for (const child of data.children ?? []) {
      check(data.text + '/', index, child,);
      index ++;
    }
  }
} catch (e) {
  console.error(`Your YAML is invalid: ${ e }`,);
  process.exitCode = EXIT_FAILURE;
}
