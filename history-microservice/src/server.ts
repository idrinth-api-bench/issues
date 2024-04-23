import Fastify from 'fastify';
import fastifyCompress from '@fastify/compress';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifyJwt from '@fastify/jwt';
import fastifyRateLimit from '@fastify/rate-limit';
import {
  DEFAULT_RADIX,
  EXIT_FAILURE,
} from './constants.ts';
import {
  configDotenv,
} from 'dotenv';
import homeRoutes from './routes/home.ts';
import loginRoutes from './routes/login.ts';
import projectsRoutes from './routes/projects.ts';
import projectRoutes from './routes/project.ts';
import routeRoutes from './routes/route.ts';

configDotenv();

const fastify = Fastify({
  logger: true,
},);

fastify.register(fastifyCors, {
  origin: process.env.FASTIFY_ORIGIN ?? '*',
},);
fastify.register(fastifyRateLimit, {
  max: Number.parseInt(
    process.env.FASTIFY_RATE_LIMIT ?? '120',
    DEFAULT_RADIX,
  ),
  timeWindow: '1 minute',
},);
fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET ?? 'SOMEsecretTObeReplaced',
},);
fastify.register(fastifyCompress, {
  threshold: Number.parseInt(
    process.env.FASTIFY_COMPRESS_MIN_SIZE ?? '1024',
    DEFAULT_RADIX,
  ),
},);
fastify.register(fastifyHelmet,);

fastify.register(homeRoutes,);
fastify.register(loginRoutes,);
fastify.register(projectsRoutes,);
fastify.register(projectRoutes,);
fastify.register(routeRoutes,);

// Run the server!
fastify.listen({
  port: Number.parseInt(process.env.FASTIFY_PORT ?? '3003', DEFAULT_RADIX,),
  host: process.env.FASTIFY_HOST ?? '127.0.0.1',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}, (err, address,) => {
  if (err) {
    fastify.log.error(err,);
    process.exit(EXIT_FAILURE,);
  }
},);
