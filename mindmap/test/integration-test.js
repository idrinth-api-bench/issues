import {
  describe,
  it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
  exec,
} from 'child_process';
import {
  promisify,
} from 'util';
import {
  rmSync,
  existsSync,
  readdirSync,
} from 'fs';
import {
  readFileSync,
} from 'node:fs';

const executeCommand = promisify(exec,);

rmSync('cache', {
  recursive: true,
  force: true,
},);
rmSync('dist', {
  recursive: true,
  force: true,
},);

await describe('Build process should run correctly', async() => {
  it('npm run build should not throw error', async() => {
    await executeCommand('npm run build',);
  },);

  await it('should create dist directory', () => {
    assert.equal(existsSync('dist',), true,);
  },);

  await it('should create cache directory', () => {
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
        assert.match(file, /[a-f0-9]+\.min\.js/u,);
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
