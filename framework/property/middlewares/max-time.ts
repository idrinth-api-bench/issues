import MaxTime from '../../src/middlewares/max-time.js';
import {
  expect,
} from 'chai';
import 'mocha';
import Result from '../../src/result.js';
import fc from 'fast-check';

describe('middlewares/max-time', () => {
  fc.assert(fc.property(fc.nat(), fc.nat(), (duration, max,) => {
    it(
      `throws only if the response is too slow(${ duration }<=${ max })`,
      () => {
        const response: Result = {
          id: 'example',
          validators: [],
          duration,
          maxDuration: max,
          response: {
            headers: {},
            cookies: {},
            uri: '',
            status: 0,
            body: '',
          },
        };
        if (duration > max) {
          expect(() => MaxTime.process(response,),)
            .to.throw(
              `The response time was above ${ max } ns`,
            );
          return;
        }
        expect(() => MaxTime.process(response,),).to.not.throw();
      },
    );
  },),);
},);
