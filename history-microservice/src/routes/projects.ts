
import Fastify from 'fastify';
import GetQueryString from './projects/GetQueryString.js';
import GetHeaders from './projects/GetHeaders.js';
import GetReply from './projects/GetReply.js';
import GetBody from './projects/GetBody.js';
import {
  HTTP_NO_AUTH,
} from '../constants.js';

const routes = async(
  fastify: Fastify.FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: Fastify.RouteOptions,
  // eslint-disable-next-line require-await
) => {
  fastify.get<{
    Querystring: GetQueryString,
    Headers: GetHeaders,
    Reply: GetReply,
    Body: GetBody,
  }>('/projects', async(request, reply,) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.status(HTTP_NO_AUTH,).send();
      return;
    }
    reply.send({
      example: {
        '2024-03-29': {
          mean: 2323324,
          average: 1324112,
          stdev: 1212,
        },
        '2024-03-30': {
          mean: 2323324,
          average: 1324112,
          stdev: 1212,
        },
        '2024-03-31': {
          mean: 2323324,
          average: 1324112,
          stdev: 1212,
        },
      },
      test: {
        '2024-03-29': {
          mean: 1323324,
          average: 2324112,
          stdev: 9212,
        },
        '2024-03-30': {
          mean: 3323324,
          average: 3324112,
          stdev: 6212,
        },
        '2024-03-31': {
          mean: 2323324,
          average: 2324112,
          stdev: 71212,
        },
      },
    },);
  },);
};
export default routes;

