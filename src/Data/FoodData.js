export const foodItems = [
    {
        name: 'dumplings',
        img: 'img/dumplings.jpg',
        section: 'Starters'
    }, {
        name: 'eggrolls',
        img: 'img/eggrolls.jpg',
        section: 'Starters'
    }, {
        name: 'wonton soup',
        img: 'img/wonton-soup.jpg',
        section: 'Starters'
    }, {
        name: 'chow mein',
        img: 'img/chow-mein.jpg',
        section: 'Noodles'
    }, {
        name: 'lo mein',
        img: 'img/lo-mein.jpg',
        section: 'Noodles'
    }, {
        name: 'fried rice',
        img: 'img/fried-rice.jpg',
        section: 'Rice'
    }, {
        name: 'garlic shrimp',
        img: 'img/garlic-shrimp.jpg',
        section: 'Mains'
    }, {
        name: 'mangolean beef',
        img: 'img/mangolean-beef.jpg',
        section: 'Mains'
    }, {
        name: 'orange chicken',
        img: 'img/orange-chicken.jpg',
        section: 'Mains'
    }
]

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {})