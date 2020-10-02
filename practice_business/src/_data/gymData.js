import importImages from '../_helpers/importImages';

const images = importImages(require.context('../images/gym', false, /\.(png|jpe?g|svg)$/));
const imagesThumb = importImages(require.context('../images/gym/thumbnails', false, /\.(png|jpe?g|svg)$/));

const gymImages = [
    {
        img: images[0],
        thumb: imagesThumb[0],
        alt: 'Weight Room'
    },
    {
        img: images[1],
        thumb: imagesThumb[1],
        alt: 'Privacy Gym'
    },
    {
        img: images[2],
        thumb: imagesThumb[2],
        alt: 'Weight Room Purple Wall'
    },
    {
        img: images[3],
        thumb: imagesThumb[3],
        alt: 'Weight Room Open Floor'
    },
    {
        img: images[4],
        thumb: imagesThumb[4],
        alt: 'Full Boxing Ring'
    },
];

export default gymImages;