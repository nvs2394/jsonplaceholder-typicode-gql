const { HTTPConnector } = require('../../connectors');

class CommentList {

  constructor(data) {
    const { items, total } = data;
    this.total = total;
    this.items = items;
  }

  static async gen() {
    const photos = await HTTPConnector.get(`/comments`);
    const commentList = {
      items: photos,
      total: photos.length
    }
    return new CommentList(commentList)
  }
}

module.exports = CommentList;