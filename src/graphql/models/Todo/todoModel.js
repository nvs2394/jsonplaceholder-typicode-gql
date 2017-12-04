const todoMock = require('./mock');

class Todo {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.title = data.title;
    this.completed = data.completed;
  } 

  get(args, ctx) {
    // get from http get /todo
    const todo = todoMock[0];
    return new Todo(todo);
  }
}