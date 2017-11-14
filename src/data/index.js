const video = {
  id: '1',
  title: 'bar',
  duration: 10,
  watched: false
}

const videos = [video, {...video,id: '2'}]

const createVideo = ({ id, title, duration, watched }) => {
  const video = {
    id,
    title,
    duration,
    watched
  };
  videos.push(video);
  return video;
}

const getVideos = () => new Promise((resolve) => resolve(videos))

const getVideoById = (id) => new Promise((resolve) => {
  const [video] = videos.filter((video) => video.id === id);
  resolve(video);
})

module.exports = {
  getVideoById,
  getVideos,
  createVideo
}