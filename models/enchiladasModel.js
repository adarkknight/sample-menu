let enchiladas = [
    {
        "name": "Build your own",
        "description": "Served with Southwestern Succotash, Black Beans with Chipotle Crema",
        "options": [
            { "type": "Beef", "price": 8.50 },
            { "type": "Chicken", "price": 9.95 },
            { "type": "Cheese", "price": 11.50 },
            { "type": "Veggie", "price": 11.50 }
        ]
    },
    {
        "name": "Chili Relleno",
        "description": "Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce",
        "price": 9.95
    },
    {
        "name": "Pepita Crusted Salmon",
        "description": "With Chipotle Glaze – chevre whipped yams, jicama slaw, tomatillo sauce",
        "price": 10.95
    }
]

const getEnchiladas = () => {
    return enchiladas;
  };
  
  module.exports = {
    getEnchiladas,
  };