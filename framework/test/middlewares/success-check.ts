/* eslint-disable max-len */
import SuccessCheck from '../../src/middlewares/success-check.js';
import {
  expect,
} from 'chai';
import 'mocha';
import StandardResponse from '../../src/standard-response.js';
import Result from '../../src/result.js';

describe('middlewares/success-check', () => {
  it('should be a class', () => {
    expect(SuccessCheck,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(SuccessCheck.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(SuccessCheck.process,).to.be.a('function',);
  },);
  const bodyForFailureResponse : Array<StandardResponse> = [
    {
      success: false,
    },
    {
      status: 'fail',
    },
    {
      status: 'error',
    },
  ];
  for (const bodyObject of bodyForFailureResponse) {
    const input : Result = {
      response: {
        status: 200,
        headers: {},
        cookies: {},
        body: JSON.stringify(bodyObject,),
        uri: '',
      },
      duration: 0,
      id: '',
      validators: [],
      maxDuration: 1000,
    };
    let field = 'status';
    if (! bodyObject.status) {
      field = 'success';
    }

    it(`process should throw error for ${ field } field as ${ bodyObject[field] } `,
      () => {
        expect(() => SuccessCheck.process(input, ),).to.throw(
          `The response was not success, ${ field } field was ${ bodyObject[field] }`,
        );
      },);

  }

  const bodyForSuccessResponse : Array<StandardResponse> = [
    {
      success: true,
    },
    {
      status: 'success',
    },
  ];
  for (const bodyObject of bodyForSuccessResponse) {
    const input : Result = {
      response: {
        status: 200,
        headers: {},
        cookies: {},
        body: JSON.stringify(bodyObject,),
        uri: '',
      },
      duration: 0,
      id: '',
      validators: [],
      maxDuration: 1000,
    };
    let field = 'success';
    if (! bodyObject.success) {
      field = 'status';
    }

    it(`process should not throw error for ${ field } field as ${ bodyObject[field] } `,
      () => {
        expect(() => SuccessCheck.process(input, ),).to.not.throw();
      },);
  }

  it('prepare should return input', () => {
    const input = {
      headers: {},
      cookies: {},
      body: 'body',
      url: 'url',
    };
    expect(SuccessCheck.prepare(input,),).to.equal(input,);
  },);
},);
