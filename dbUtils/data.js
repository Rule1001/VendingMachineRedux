const initialState = {
    stock: {
        'A1': {
            name: 'Mars Bar',
            url: 'https://images-na.ssl-images-amazon.com/images/I/71NrROgheSL._SX522_.jpg',
            quantity: 10,
            stuck: false,
            price: 0.85
        },
        'A2': {
            name: 'Kettle Crisps',
            url: 'http://www.kettlefoods.co.uk/media/dContent/368/homepagePackShot.png',
            quantity: 10,
            stuck: false,
            price: 0.85
        },
        'A3': {
            name: 'polo',
            url: 'http://www.kettlefoods.co.uk/media/dContent/368/homepagePackShot.png',
            quantity: 10,
            stuck: false,
            price: 0.85
        },
        'A4': {
            name: 'maltesers',
            url: 'http://www.kettlefoods.co.uk/media/dContent/368/homepagePackShot.png',
            quantity: 10,
            stuck: false,
            price: 0.85
        },
        'A5': {
            name: 'revells',
            url: 'http://www.kettlefoods.co.uk/media/dContent/368/homepagePackShot.png',
            quantity: 10,
            stuck: false,
            price: 0.85
        }
    },
    credit: [0.2, 0.2, 0.05, 0.2, 0.2],
    changeArea: [],
    float: {
        '1': 10,
        '0.5': 10,
        '0.1': 10
    },
    displayMessage: '',
    selection: '',
    productDispenser: 'A1',
    changeDispenser: 0,
    dispenserDoorOpen: false,
    power: false
};

export default initialState