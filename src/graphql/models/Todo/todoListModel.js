const { HTTPConnector } = require('../../connectors');

class TodoList {

  constructor(data) {
    const { items, total } = data;
    this.total = total;
    this.items = items;
  }

  static async gen() {
    const todos = await HTTPConnector.get(`/todos`);
    const todoList = {
      items: todos,
      total: todos.length
    }
    return new TodoList(todoList)
  }
}

module.exports = TodoList;