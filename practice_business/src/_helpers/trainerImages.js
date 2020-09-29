function importAll(r) {
    return r.keys().map(r);
  }

const images = importAll(require.context('../images/trainers', false, /\.(png|jpe?g|svg)$/));

const trainerInfo = [
    {
        name: 'Amber',
        focus: 'Yoga, Kickboxing',
        desc: 'Since 2017, Amber has been kicking our members into shape.',
        image: images[0],
        alt: 'Trainer Amber'
    },
    {
        name: 'James',
        focus: 'Weightlifting, Crossfit',
        desc: 'Our most requested trainer, James will help you reach your fitness goals.',
        image: images[1],
        alt: 'Trainer James'
    },
    {
        name: 'Kayla',
        focus: 'Pound, HIIT, Crossfit',
        desc: 'Kayla is certified to train in almost the entire gym. She knows her stuff.',
        image: images[2],
        alt: 'Trainer Kayla'
    },
    {
        name: 'Rick',
        focus: 'Weightlifting, Pound, Muay Thai',
        desc: 'Rick will show you how to throw a bunch and lift more weight than you\'ve ever imagined',
        image: images[4],
        alt: 'Trainer Rick'
    },
    {
        name: 'Pat',
        focus: 'Weightlifting',
        desc: 'Just because he owns the gym doesn\'t mean he can\'t train. He\'s been in the game long enough.',
        image: images[3],
        alt: 'Owner Pat'
    },
];

export default trainerInfo;