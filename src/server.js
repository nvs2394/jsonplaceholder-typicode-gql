const hapi = require('hapi');

const Config = require('config');
const plugins = require('./plugin');
async function StartServer () {
  const server = new hapi.Server({
    port: Config.get('App.port'),
    host: '0.0.0.0'
  });

  await server.register(plugins);

  try {
    await server.start();
  } catch (err) {
    console.log(`Error while starting server: ${err.message}`);
  }

  console.log(`Server running at: ${server.info.uri}`);
}
// StartServer();
module.exports = StartServer;