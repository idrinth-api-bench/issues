import Fastify from 'fastify';
import fastifyCompress from '@fastify/compress';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifyJwt from '@fastify/jwt';
//import fastifyMysql from '@fastify/mysql';
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
  origin: process.env.FASTIFY_ORIGIN,
},);
fastify.register(fastifyRateLimit, {
  max: Number.parseInt(
    process.env.FASTIFY_RATE_LIMIT,
    DEFAULT_RADIX,
  ),
  timeWindow: '1 minute',
},);
/*fastify.register(fastifyMysql, {
  connectionString: process.env.FASTIFY_MYSQL_CONNECTION,
},);*/
fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET,
},);
fastify.register(fastifyCompress, {
  threshold: Number.parseInt(
    process.env.FASTIFY_COMPRESS_MIN_SIZE,
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
  port: Number.parseInt(process.env.FASTIFY_PORT, DEFAULT_RADIX,),
  host: process.env.FASTIFY_HOST,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}, (err, address,) => {
  if (err) {
    fastify.log.error(err,);
    process.exit(EXIT_FAILURE,);
  }
},);
