const { HTTPConnector } = require('../../connectors');

class Photo {
  constructor(data) {
    this.id = data.id;
    this.albumId = data.userId;
    this.title = data.title;
    this.thumbnailUrl = data.thumbnailUrl;
    this.url = data.url;
  } 

  static async gen(args, ctx) {
    const photo = await HTTPConnector.get(`/photos/${args.id}`);
    return new Photo(photo);
  }
}

module.exports = Photo;