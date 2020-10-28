import { fastify, FastifyInstance } from "fastify";

const server: FastifyInstance = fastify({
    logger: true
});

server.listen(3000, (err) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
});
