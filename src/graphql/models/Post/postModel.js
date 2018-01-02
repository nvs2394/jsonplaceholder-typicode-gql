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

  static async getPostByUserId(args, ctx) {
    const { userId } =  args;
    const posts = await HTTPConnector.get(`/users/${userId}/posts`);
    posts.map((post) => new Post(post));
    return posts;
  }
}

module.exports = Post;