const { HTTPConnector } = require('../../connectors');

class PostList {

  constructor(data) {
    const { items, total } = data;
    this.total = total;
    this.items = items;
  }

  static async gen() {
    const posts = await HTTPConnector.get(`/posts`);
    const postList = {
      items: posts,
      total: posts.length
    }
    return new PostList(postList)
  }
}

module.exports = PostList;