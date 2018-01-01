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
    try {
      const user = await HTTPConnector.get(`/users/${args.id}`);
      return new User(user);
    } catch (error) {
      throw Error(error); 
    }
  }

  static async create(args, ctx) {
    try {
      const { input } = args;
      const user = await HTTPConnector.post('/users', input);
      return new User(user);
    } catch (error) {
      throw Error(error); 
    }
  }
}

module.exports = User;