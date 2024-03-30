import toFilename from '../../src/route-builder/to-filename.js';
import {
  expect,
} from 'chai';
import 'mocha';

describe('open-api/find-name', () => {
  it('should be a function', () => {
    expect(toFilename,).to.be.a('function',);
  },);
  it('should replaces spaces with -', () => {
    expect(toFilename(' ',),).to.equal('',);
  },);
  it('should replaces none ascii', () => {
    expect(toFilename('äqwe][sAdfsad-fd+',),).to.equal('qwes-adfsad-fd',);
  },);
},);
