import { getAllForests } from "../Api";

const getForestDataWithMedia = async () => {
  try {
    const forests = await getAllForests();
    return forests.map((forest) => {
      const images = getImages(forest.id);
      const sounds = getSounds(forest.id);
      return {
        ...forest,
        images,
        sounds,
      };
    });
  } catch (error) {
    console.log(error);
  }
};

const getImages = (id) => {
  switch (id) {
    case 1:
      return [
        { url: 'http://localhost:3000/assets/img/forests/1/g_1.jpg', title: 'gaio 1' },
        { url: 'http://localhost:3000/assets/img/forests/1/g_2.jpg', title: 'gaio 2' },
      ];
    case 2:
      return [
        { url: 'http://localhost:3000/assets/img/forests/2/h_1.jpg', title: 'haguro 1' },
        { url: 'http://localhost:3000/assets/img/forests/2/h_2.jpg', title: 'haguro 2' },
      ];
    case 3:
      return [
        { url: 'http://localhost:3000/assets/img/forests/3/p_1.jpg', title: 'plateau 1' },
        { url: 'http://localhost:3000/assets/img/forests/3/p_2.jpg', title: 'plateau 2' },
      ];
    case 4:
      return [
        { url: 'http://localhost:3000/assets/img/forests/4/y_1.jpg', title: 'yellowstone 1' },
        { url: 'http://localhost:3000/assets/img/forests/4/y_2.jpg', title: 'yellowstone 2' },
        { url: 'http://localhost:3000/assets/img/forests/4/y_3.jpg', title: 'yellowstone 3' },
        { url: 'http://localhost:3000/assets/img/forests/4/y_4.jpg', title: 'yellowstone 4' },
      ];
    default:
      return [];
  }
};

const getSounds = (id) => {
  switch (id) {
    case 1:
      return [`${process.env.PUBLIC_URL}/assets/sounds/1.wav`];
    case 2:
      return [`${process.env.PUBLIC_URL}/assets/sounds/2.mp3`];
    case 3:
      return [`${process.env.PUBLIC_URL}/assets/sounds/3.mp3`];
    case 4:
      return [`${process.env.PUBLIC_URL}/assets/sounds/4.wav`];
    default:
      return [];
  }
};


export default getForestDataWithMedia;
