import {
  describe,
  it,
} from 'mocha';
import {
  assert,
} from 'chai';
import {
  execSync,
} from 'child_process';

import {
  rmSync,
  existsSync,
  readdirSync,
  readFileSync,
} from 'fs';

// prepare for tests (beforeAll) , should be synchronous !!
rmSync('cache', {
  recursive: true,
  force: true,
},);
rmSync('dist', {
  recursive: true,
  force: true,
},);
execSync('npm run build',);

describe('Build process should run correctly', () => {

  it('should create dist directory', () => {
    assert.equal(existsSync('dist',), true,);
  },);

  it('should create cache directory', () => {
    assert.equal(existsSync('cache',), true,);
  },);
},);

describe('Verify content of dist directory', () => {

  const fileNames = [];
  for (const file of readdirSync('public', 'utf8',)) {
    fileNames.push(file,);
  }
  for (const file of readdirSync('assets', 'utf8',)) {
    fileNames.push(file,);
  }
  for (const file of readdirSync('cache', 'utf8',)) {
    fileNames.push(file,);
  }

  for (const file of fileNames) {
    it(`should have ${ file }`, () => {
      assert.equal(existsSync(`dist/${ file }`,), true,);
    },);
  }
},);

describe('Verify content of cache directory', () => {
  for (const file of readdirSync('cache', 'utf8',)) {
    if (file.endsWith('.js',)) {
      it(`${ file } should match pattern`, () => {
        assert.match(file, /[a-f0-9]+\.min\.js/ug,);
      },);
    }
  }
},);

describe('Verify index.html file content', () => {
  const html = readFileSync('dist/index.html',).toString();
  for (const file of readdirSync('dist', 'utf8',)) {
    if (file.endsWith('.css',)) {

      it(`index.html should have ${ file }`, () => {
        assert.equal(true,
          // eslint-disable-next-line max-len
          html.includes(`<link rel=stylesheet type=text/css href=${ file } />`,),
        );
      },);
    } else if (file.endsWith('.js',)) {
      it(`index.html should have ${ file }`, () => {
        assert.equal(true,
          html.includes(`<script src=${ file }></script>`,),
        );
      },);
    }
  }
},);
