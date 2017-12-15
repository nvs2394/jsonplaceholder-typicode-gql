// Application entrypoint. Actually starts the server.
const StartServer = require('./server');

// Start the server, detail out what's going on.
try {
  StartServer();
}
catch (err) {
  console.log(err);
}
