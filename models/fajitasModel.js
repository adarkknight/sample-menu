let fajitas = [
    {
        "description": "Served with red rice, black beans, grilled tomato salad, choice of corn or flour tortillas",
        "price": 10.95,
        "options": [
            {
                "Tortilla": ["Flour", "Corn"],
            },
            {
                "type": "Chicken",
                "ingredients": ["Onions", "Poblano and Bell Peppers", "Guacamole", "Two Salsas"]
            },
            {
                "type": "Sirloin Steak",
                "ingredients": ["Onions", "Poblano and Bell Peppers", "Carrots", "Onion", "Guacamole", "Two Salsas"]
            }
        ]
    }
];

const getFajitas = () => {
    return fajitas;
};

module.exports = {
    getFajitas,
};