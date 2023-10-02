let greenSalads = [
    {
        "name": "Grilled Red Trout",
        "ingredients": ["Lentils", "Tomatoes", "Cukes", "Green Beans", "Red Bells", "Almonds"],
        "dressing": "Sundried Tomato Vinaigrette",
        "price": 10.95
      },
      {
        "name": "Smoked Turkey Cheese Tortellini",
        "ingredients": ["Bacon", "Tomato", "Cucumber", "Egg", "Black Bean-Corn Salsa", "Avocado"],
        "price": 9.95
      },
      {
        "name": "Asian Grilled Chicken",
        "ingredients": ["Snow Peas", "Carrot Slaw", "Red Bells", "Water Chestnut", "Peanuts", "Baby Corn", "Cilantro", "Cukes"],
        "dressing": "Spicy Peanut Dressing",
        "price": 10.50
      },
      {
        "name": "Southwest Grilled Chicken",
        "ingredients": ["Tomato", "Guacamole", "Pepitas", "Jicama", "Corn & Black Bean Salsa", "Orange Wedges"],
        "dressing": "Spicy Citrus Vinaigrette",
        "price": 10.50
      },
      {
        "name": "Mediterranean",
        "ingredients": ["Italian Sausage", "Artichoke Hearts", "Green Beans", "Roma Tomato", "Kalamatas", "Red Onion", "Cucumber", "Croutons", "Parmesan", "Fresh Mozzarella"],
        "dressing": "Gorgonzola Vinaigrette",
        "price": 9.95
      },
      {
        "name": "Grilled Salmon",
        "ingredients": ["Artichoke tapenade", "shredded kale", "corn", "radish", "parmesan crisps"],
        "price": 11.50
      }
];

const getSalads = () => {
    return greenSalads;
}

module.exports = {
    getSalads,
  };