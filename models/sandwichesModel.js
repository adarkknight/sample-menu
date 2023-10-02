
let sandwiches = [
  {
    "description": "Served with choice of house pasta salad, green salad, or fresh fruit. For an additional $1.50, you can 'upgrade' (by substituting) to ½ pasta salad of the day, French onion soup or soup of the day."
  },
  {
    "name": "COLD",
    "options": [
      {
        "type": "Choice of bread",
        "options": ["sourdough", "whole wheat", "rye"]
      },
      {
        "type": "Sandwich",
        "sizes": [
          { "name": "Half", "price": 7.95 },
          { "name": "Full", "price": 9.25 }
        ],
        "choices": [
          { "name": "Turkey & Avocado", "description": "with tomato" },
          { "name": "Pub Club", "description": "turkey, bacon, lettuce, tomato" },
          { "name": "Rare Roast Beef & Swiss", "description": "sweet-hot mustard, lettuce, red onion" },
          { "name": "Veggie", "description": "pepper jack, avocado, sprout, tomato" }
        ]
      }
    ]
  },
  {
    "name": "HOT",
    "options": [
      {
        "type": "Choice of bread",
        "options": ["whole wheat", "cheese & onion bun"]
      },
      {
        "type": "Sandwich",
        "choices": [
          {
            "name": "Southwest Chicken Breast",
            "description": "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese",
            "price": 9.50
          },
          {
            "name": "Portobello Fresh Mozzarella",
            "description": "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli",
            "price": 9.50
          },
          {
            "name": "Chipotle BBQ Pork",
            "description": "Sandwich with Pickled Jalapeño Slaw",
            "price": 9.50
          },
          {
            "name": "Bacon Burger*",
            "description": "Swiss, Lettuce, Tomato",
            "price": 9.25
          },
          {
            "name": "Mexi Burger*",
            "description": "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole",
            "price": 9.25
          },
          {
            "name": "Herb Marinated Top Sirloin*",
            "description": "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia",
            "price": 10.95
          },
          {
            "name": "Roast Beef with Ancho Au Jus",
            "description": "Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette",
            "price": 9.75
          },
          {
            "name": "Blackened Catfish Creole",
            "description": "Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough",
            "price": 9.75
          }
        ]
      }
    ]
  }
];

const getSandwiches = () => {
  return sandwiches;
};

module.exports = {
  getSandwiches,
};