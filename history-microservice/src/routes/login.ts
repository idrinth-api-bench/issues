import Fastify from 'fastify';
import PostHeaders from './login/PostHeaders.js';
import PostReply from './login/PostReply.js';
import PostBody from './login/PostBody.js';
import PostQueryString from './login/PostQueryString.js';

const routes = async(
  fastify: Fastify.FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: Fastify.RouteOptions,
  // eslint-disable-next-line require-await
) => {
  fastify.post<{
    Querystring: PostQueryString,
    Headers: PostHeaders,
    Reply: PostReply,
    Body: PostBody,
  }>('/login', (request, reply) => {
    const token = fastify.jwt.sign({
      username: request.body.username,
    },);
    reply.send({
      token,
    },);
  },);
};
export default routes;

