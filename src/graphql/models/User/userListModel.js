const { HTTPConnector } = require('../../connectors');

class UserList {

  constructor(data) {
    const { items, total } = data;
    this.total = total;
    this.items = items;
  }

  static async gen() {
    const users = await HTTPConnector.get(`/users`);
    const userList = {
      items: users,
      total: users.length
    }
    return new UserList(userList)
  }
}

module.exports = UserList;