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

  static async create(args, ctx) {
    try {
      const { input } = args;
      const todo = await HTTPConnector.post('/todos', input);
      return new Todo(todo);
    } catch (error) {
      throw Error(error); 
    }
  }

  static async getTodoByUserId(args, ctx) {
    const { userId } =  args;
    const todos = await HTTPConnector.get(`/users/${userId}/todos`);
    todos.map((todo) => new Todo(todo));
    return todos;
  }
}

module.exports = Todo;