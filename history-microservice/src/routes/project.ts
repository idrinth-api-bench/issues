import Fastify from 'fastify';
import GetQueryString from './project/GetQueryString.js';
import GetHeaders from './project/GetHeaders.js';
import GetReply from './project/GetReply.js';
import GetBody from './project/GetBody.js';
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
  }>('/project/:project', async(request, reply,) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.status(HTTP_NO_AUTH,).send();
      return;
    }
    reply.send({
      route1: {
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
      route2: {
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

