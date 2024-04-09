import 'mocha';
import {
  expect,
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

const TIMEOUT = 30000;
const WAIT = 2500;
const delay = (duration,) => new Promise((resolve,) => setTimeout(
  resolve,
  duration,
),);

describe('Build process should run correctly', () => {
  before(async function() {
    // eslint-disable-next-line no-invalid-this
    this.timeout(TIMEOUT,);
    for (const folder of [
      'cache',
      'dist',
    ]) {
      if (existsSync(`${ process.cwd() }/${ folder }`,)) {
        rmSync(`${ process.cwd() }/${ folder }`, {
          recursive: true,
          force: true,
        },);
      }
    }
    execSync('npm run build',);
    await delay(WAIT,);
  },);

  it('should create dist directory', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(existsSync(`${ process.cwd() }/dist`,),).to.be.true;

    describe('Verify content of dist directory', () => {
      const fileNames = [];
      for (const file of readdirSync(`${ process.cwd() }/public`, 'utf8',)) {
        fileNames.push(file,);
      }
      for (const file of readdirSync(`${ process.cwd() }/assets`, 'utf8',)) {
        fileNames.push(file,);
      }
      for (const file of readdirSync(`${ process.cwd() }/cache`, 'utf8',)) {
        fileNames.push(file,);
      }

      for (const file of fileNames) {
        it(`should have ${ file }`, () => {
          // eslint-disable-next-line no-unused-expressions
          expect(existsSync(`${ process.cwd() }/dist/${ file }`,),).to.be.true;
        },);
      }
    },);
  },);

  it('should create cache directory', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(existsSync(`${ process.cwd() }/cache`,),).to.be.true;

    describe('Verify content of cache directory', () => {
      for (const file of readdirSync(`${ process.cwd() }/cache`, 'utf8',)) {
        if (file.endsWith('.js',)) {
          it(`${ file } should match pattern`, () => {
            expect(file,).to.match(/[a-f0-9]+\.min\.js/ug,);
          },);
        }
      }
    },);
  },);

  describe('Verify index.html file content', () => {
    const html = readFileSync(`${ process.cwd() }/dist/index.html`,).toString();
    for (const file of readdirSync(`${ process.cwd() }/dist`, 'utf8',)) {
      if (file.endsWith('.css',)) {
        it(`index.html should have ${ file }`, () => {
          // eslint-disable-next-line no-unused-expressions
          expect(
            // eslint-disable-next-line max-len
            html.includes(`<link rel=stylesheet type=text/css href=${ file } />`,),
          ).to.be.true;
        },);
      } else if (file.endsWith('.js',)) {
        it(`index.html should have ${ file }`, () => {
          // eslint-disable-next-line no-unused-expressions
          expect(
            html.includes(`<script src=${ file }></script>`,)
            || html.includes(`<script type=module src=${ file } ></script>`,),
          ).to.be.true;
        },);
      }
    }
  },);
},);
