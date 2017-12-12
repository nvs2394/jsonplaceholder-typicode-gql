const { HTTPConnector } = require('../../connectors');

class Post {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.title = data.title;
    this.body = data.body;
  } 

  static async gen(args, ctx) {
    const post = await HTTPConnector.get(`/posts/${args.id}`);
    return new Post(post);
  }
}

module.exports = Post;