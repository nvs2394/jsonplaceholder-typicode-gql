const { HTTPConnector } = require('../../connectors');

class UserList {
  constructor(data) {
    const { items } = data;
    this.items = items;
  }
  static async gen() {
    const users = await HTTPConnector.get(`/users`);
    return users;
  }
}

module.exports = UserList;