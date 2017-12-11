const { HTTPConnector } = require('../../connectors');

class Todo {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.title = data.title;
    this.completed = data.completed;
  } 

  static async gen(args, ctx) {
    const todo = await HTTPConnector.get(`/todos/${args.id}`);
    return new Todo(todo);
  }
}

module.exports = Todo;