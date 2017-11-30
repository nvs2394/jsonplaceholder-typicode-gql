const request = require('request-promise-native');
const url = require('url');

class HTTPConnecttor {
  static async get(urlString){
    return await request.get(urlString)
  };
}

module.exports = HTTPConnecttor;