import { getAllForests } from "../Api";

const getForestDataWithMedia = async () => {
  try {
    const forests = await getAllForests();
    return forests.map((forest) => {
      const images = getImages(forest.id);
      const sounds = getSounds(forest.id);
      const wikipediaUrl = getWikipediaUrl(forest.id);
      return {
        ...forest,
        images,
        sounds,
        wikipediaUrl,
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
        { url: 'http://localhost:3000/assets/img/forests/1/y_1.jpg', title: 'yellowstone 1' },
        { url: 'http://localhost:3000/assets/img/forests/1/y_2.jpg', title: 'yellowstone 2' },
        { url: 'http://localhost:3000/assets/img/forests/1/y_3.jpg', title: 'yellowstone 3' },
        { url: 'http://localhost:3000/assets/img/forests/1/y_4.jpg', title: 'yellowstone 4' },
      ];
    case 2:
      return [
        { url: 'http://localhost:3000/assets/img/forests/2/h_1.jpg', title: 'haguro 1' },
        { url: 'http://localhost:3000/assets/img/forests/2/h_2.jpg', title: 'haguro 2' },
        { url: 'http://localhost:3000/assets/img/forests/2/h_3.jpg', title: 'haguro 3' },
        { url: 'http://localhost:3000/assets/img/forests/2/h_4.jpg', title: 'haguro 4' },
      ];
    case 3:
      return [
        { url: 'http://localhost:3000/assets/img/forests/3/p_1.jpg', title: 'plateau 1' },
        { url: 'http://localhost:3000/assets/img/forests/3/p_2.jpg', title: 'plateau 2' },
        { url: 'http://localhost:3000/assets/img/forests/3/p_3.jpg', title: 'plateau 3' },
        { url: 'http://localhost:3000/assets/img/forests/3/p_4.jpg', title: 'plateau 4' },
        
      ];
    case 4:
      return [
        { url: 'http://localhost:3000/assets/img/forests/4/b_1.jpg', title: 'black 1' },
        { url: 'http://localhost:3000/assets/img/forests/4/b_2.jpg', title: 'black 2' },
        { url: 'http://localhost:3000/assets/img/forests/4/b_3.jpg', title: 'black 3' },
        { url: 'http://localhost:3000/assets/img/forests/4/b_4.jpg', title: 'black 4' },

      ];
      case 5:
      return [
        { url: 'http://localhost:3000/assets/img/forests/5/g_1.jpg', title: 'gaio 1' },
        { url: 'http://localhost:3000/assets/img/forests/5/g_2.jpg', title: 'gaio 2' },
      ];
      case 6:
      return [
        { url: 'http://localhost:3000/assets/img/forests/6/l_1.jpg', title: 'gaio 1' },
        { url: 'http://localhost:3000/assets/img/forests/6/l_2.jpg', title: 'gaio 2' },
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
    case 5:
      return [`${process.env.PUBLIC_URL}/assets/sounds/5.mp3`];
    case 6:
      return [`${process.env.PUBLIC_URL}/assets/sounds/6.mp3`];
    default:
      return [];
  }
};

const getWikipediaUrl = (id) => {
  switch (id) {
    case 1:
      return 'https://en.wikipedia.org/wiki/Yellowstone_National_Park';
    case 2:
      return 'https://en.wikipedia.org/wiki/Mount_Haguro';
    case 3:
      return 'https://en.wikipedia.org/wiki/Colorado_Plateau';
    case 4:
      return 'https://en.wikipedia.org/wiki/Gaio_Forest';
    default:
      return '';
  }
};


export default getForestDataWithMedia;
