const { HTTPConnector } = require('../../connectors');

class PhotoList {

  constructor(data) {
    const { items, total } = data;
    this.total = total;
    this.items = items;
  }

  static async gen() {
    const photos = await HTTPConnector.get(`/photos`);
    const photoList = {
      items: photos,
      total: photos.length
    }
    return new PhotoList(photoList)
  }
}

module.exports = PhotoList;