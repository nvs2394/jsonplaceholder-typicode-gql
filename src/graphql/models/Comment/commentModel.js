const { HTTPConnector } = require('../../connectors');

class Comment {
  constructor(data) {
    this.id = data.id;
    this.albumId = data.userId;
    this.postId = data.postId;
    this.name = data.name;
    this.email = data.email;
    this.body = data.body;
  } 

  static async gen(args, ctx) {
    const comment = await HTTPConnector.get(`/comments/${args.id}`);
    return new Comment(comment);
  }
}

module.exports = Comment;