const initialState = {
    stock: {
        'A1': {
            name: 'Mars Bar',
            url: '../assets/marsbar.jpg',
            quantity: 10,
            stuck: false,
            price: 0.85
        },
        'A2': {
            name: 'Kettle Crisps',
            url: '../assets/kettlechips.png',
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