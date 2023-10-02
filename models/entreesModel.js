let entrees = [
    {
        "name": "Farfalle Pasta with Braised Pork in Tomato Cream",
        "ingredients": ["capers", "butternut squash", "kale"],
        "price": 12.95
    },
    {
        "name": "Stout Braised Bratwurst",
        "ingredients": ["horseradish mashed potatoes", "roasted root veggies", "grilled onion"],
        "price": 13.95
    },
    {
        "name": "Salmon & Crispy Tofu in Yellow Curry Sauce",
        "ingredients": ["vegetable sauté", "golden raisin chutney"],
        "price": 15.95
    },
    {
        "name": "Sesame Shrimp",
        "ingredients": ["udon noodles", "ramen broth", "shiitake mushrooms", "bean sprouts", "scallions"],
        "price": 13.95
    }
];

const getEntrees = () => {
    return entrees;
  };
  
  module.exports = {
    getEntrees,
  };