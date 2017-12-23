const { HTTPConnector } = require('../../connectors');

class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.avatar = data.avatar;
    this.email = data.email;
    this.address = data.address;
  } 

  static async gen(args, ctx) {
    const user = await HTTPConnector.get(`/users/${args.id}`);
    return new User(user);
  }

  static async create(args, ctx) {
    const { input } = args;
    const user = await HTTPConnector.post(`/users/${args.id}`, input);
    return new User(user);
  }
}

module.exports = User;