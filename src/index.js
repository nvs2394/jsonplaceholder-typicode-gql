const config = require('config');
// Application entrypoint. Actually starts the server.
const server = require('./server');

// Start the server, detail out what's going on.
server.start((err) => {
  console.log(`server started at port: ${config.get('App.port')}`)
});
