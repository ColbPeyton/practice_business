import importImages from '../_helpers/importImages';

const images = importImages(require.context('../images/gym', false, /\.(png|jpe?g|svg)$/));

const gymImages = [
    {
        img: images[0],
        alt: 'Weight Room'
    },
    {
        img: images[1],
        alt: 'Privacy Gym'
    },
    {
        img: images[2],
        alt: 'Weight Room Purple Wall'
    },
    {
        img: images[3],
        alt: 'Weight Room Open Floor'
    },
];

export default gymImages;