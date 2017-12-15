const pkg = require('../package.json');

module.exports = {
    App: {
        name: pkg.name,
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 3000,
    },
    MS: {
        url: 'https://jsonplaceholder.typicode.com'
    }
}