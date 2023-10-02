let tacos = [
    {
        "name": "Beer Battered Fish",
        "sides": ["Jalapeño Remoulade", "Roasted Salsa", "Cabbage"],
        "price": 9.95
    },
    {
        "name": "Carne Asada (marinated sirloin)",
        "sides": ["Guacamole", "Tomatillo Salsa"],
        "price": 9.95
    },
    {
        "name": "Citrus Marinated Chicken",
        "sides": ["Guacamole", "Tomatillo Salsa"],
        "price": 9.95
    },
    {
        "name": "Grilled Veggie",
        "sides": ["Zucchini", "Yellow Squash", "Bell Peppers", "Onion", "Guacamole", "Tomatillo Salsa"],
        "price": 9.95
    }
];

const getTacos = () => {
    return tacos;
};

module.exports = {
    getTacos,
};