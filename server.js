import Fastify from "fastify";

const fastify = Fastify({
    logger: true
})

const PORT = 4000;

fastify.get('/api/hello', async function getHello(params) {
    return {text: 'HelloWorld'};
})

try{
    await fastify.listen({port: 3000});
}
catch(err){
    console.error(err);
}