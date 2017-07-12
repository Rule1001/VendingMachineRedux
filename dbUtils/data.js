const initialState = {
    stock: {
        'A1': {
            code: 'A1',
            name: 'Mars Bar',
            url: 'https://images-na.ssl-images-amazon.com/images/I/71NrROgheSL._SX522_.jpg',
            quantity: 10,
            stuck: false,
            price: 0.85
        },
        'A2': {
            code: 'A2',
            name: 'Kettle Crisps',
            url: 'http://www.kettlefoods.co.uk/media/dContent/368/homepagePackShot.png',
            quantity: 8,
            stuck: false,
            price: 0.85
        },
        'A3': {
            code: 'A3',
            name: 'Polo mints',
            url: 'https://img.tesco.com/Groceries/pi/779/0000050189779/IDShot_540x540.jpg',
            quantity: 10,
            stuck: false,
            price: 0.45
        },
        'A4': {
            code: 'A4',
            name: 'Maltesers',
            url: 'https://upload.wikimedia.org/wikipedia/en/6/60/Maltesers-Wrapper-Small.jpg',
            quantity: 10,
            stuck: false,
            price: 0.65
        },
        'B1': {
            code: 'B1',
            name: 'Revels',
            url: 'https://www.englishteastore.com/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/F/C/FCND_MAR_REV_-00_Mars-Revels-35g.jpg',
            quantity: 10,
            stuck: false,
            price: 0.85
        },
        'B2': {
            code: 'B2',
            name: 'Coke',
            url: 'https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000277254629.jpg?strip=all&w=676&quality=100',
            quantity: 10,
            stuck: false,
            price: 1.20
        },
        'B3': {
            code: 'B3',
            name: 'Peppermint cream',
            url: 'http://images.sweetauthoring.com/product/16060.png',
            quantity: 10,
            stuck: false,
            price: 0.50
        },
        'B4': {
            code: 'B4',
            name: 'Lilt',
            url: 'https://jlbrooks.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/-/d-lilt-can_1.jpg',
            quantity: 10,
            stuck: false,
            price: 1.20
        }

        
    },
    credit: [0.2, 0.2, 0.05, 0.2, 0.2, 0.2],
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

export default initialState;