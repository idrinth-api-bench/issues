import Fastify from 'fastify';
import GetQueryString from './home/GetQueryString.js';
import GetHeaders from './home/GetHeaders.js';
import GetReply from './home/GetReply.js';
import GetBody from './home/GetBody.js';
import pkg from '../../package.json' with{
  type: 'json',
};

const routes = async(
  fastify: Fastify.FastifyInstance,
  options: Fastify.RouteOptions,
  // eslint-disable-next-line require-await
) => {
  fastify.get<{
    Querystring: GetQueryString,
    Headers: GetHeaders,
    Reply: GetReply,
    Body: GetBody,
  }>('/', (request, reply) => {
    reply.send({
      version: pkg.version,
      name: pkg.name,
      documentation: 'https//idrinth-api-ben.ch',
    },);
  },);
};
export default routes;

