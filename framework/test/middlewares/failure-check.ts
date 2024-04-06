/* eslint-disable max-len */
import FailureCheck from '../../src/middlewares/failure-check.js';
import {
  expect,
} from 'chai';
import 'mocha';
import StandardResponse from '../../src/standard-response.js';
import Result from '../../src/result.js';

describe('middlewares/failure-check', () => {
  it('should be a class', () => {
    expect(FailureCheck,).to.be.a('function',);
  },);
  it('should have a static method prepare', () => {
    expect(FailureCheck.prepare,).to.be.a('function',);
  },);
  it('should have a static method process', () => {
    expect(FailureCheck.process,).to.be.a('function',);
  },);
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
    let field = 'status';
    if (! bodyObject.status) {
      field = 'success';
    }

    it(`process should throw error for ${ field } field as ${ bodyObject[field] } `,
      () => {
        expect(() => FailureCheck.process(input, ),).to.throw(
          `The response was not failure, ${ field } field was ${ bodyObject[field] }`,
        );
      },);

  }

  const bodyForFailureResponse : Array<StandardResponse> = [
    {
      success: false,
    },
    {
      status: 'error',
    },
    {
      status: 'fail',
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

    it(`process should not throw error for ${ field } field as ${ bodyObject[field] } `,
      () => {
        expect(() => FailureCheck.process(input, ),).to.not.throw();
      },);
  }

  it('prepare should return input', () => {
    const input = {
      headers: {},
      cookies: {},
      body: 'body',
      url: 'url',
    };
    expect(FailureCheck.prepare(input,),).to.equal(input,);
  },);
},);
