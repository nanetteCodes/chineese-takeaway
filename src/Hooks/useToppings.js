import { useState } from "react";

export function useToppings(defaultTopping) {
    const [toppings, setToppings] = useState(
        defaultTopping || getDefaultToppings()
    );

    function checkTopping(index) {
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings);
    }

    return {
        checkTopping,
        toppings
    };
}

const toppingsList = [
    "white rice",
    "brown rice",
    "fried rice",
    "eggroll",
    "wonton soup",
    "egg flower soup",
    "kimchi",
    "side salad",
    "cucumber salad"
];

function getDefaultToppings() {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }));
}
