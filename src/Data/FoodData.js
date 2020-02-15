export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export const foodItems = [
    {
        name: 'dumplings',
        img: 'img/dumplings.jpg',
        price: 4.5,
        section: 'Starters'
    }, {
        name: 'eggrolls',
        img: 'img/eggrolls.jpg',
        price: 6.5,
        section: 'Starters'
    }, {
        name: 'wonton soup',
        img: 'img/wonton-soup.jpg',
        price: 4,
        section: 'Starters'
    }, {
        name: 'chow mein',
        img: 'img/chow-mein.jpg',
        price: 9.5,
        section: 'Noodles'
    }, {
        name: 'lo mein',
        img: 'img/lo-mein.jpg',
        price: 10,
        section: 'Noodles'
    }, {
        name: 'garlic shrimp',
        img: 'img/garlic-shrimp.jpg',
        price: 12.5,
        section: 'Mains'
    }, {
        name: 'mangolean beef',
        img: 'img/mangolean-beef.jpg',
        price: 13,
        section: 'Mains'
    }, {
        name: 'orange chicken',
        img: 'img/orange-chicken.jpg',
        price: 11.5,
        section: 'Mains'
    }, {
        name: 'fried rice',
        img: 'img/fried-rice.jpg',
        price: 2.5,
        section: 'Rice'
    }, {
        price: 1,
        name: 'Soda',
        choices: ['Coke', 'Diet Coke', 'Sprite']
    }
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});