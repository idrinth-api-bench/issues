import Tool from '../../src/components/tool.tsx';
import {
  expect,
} from 'chai';

describe('components/tool', () => {
  it('should be a function', () => {
    expect(Tool,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Tool({
      name: 'example',
      imgSrc: '/',
      desc: 'example desc',
      link: '/',
    },);
    expect(result,).to.be.a('object',);
  },);
},);
