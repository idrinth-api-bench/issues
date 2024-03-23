import ContentUnit from '../../src/components/content-unit.tsx';
import {
  expect,
} from 'chai';

describe('components/card', () => {
  it('should be a function', () => {
    expect(ContentUnit,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = ContentUnit({
      titleText: '',
      titleLevel: 1,
      children: [],
    },);
    expect(result,).to.be.a('object',);
  },);
},);
