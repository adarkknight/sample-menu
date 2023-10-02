let quiche = [
    {
        "name": "Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche",
        "options": [
          { "type": "Choice of Fresh Fruit", "price": 8.95 },
          { "type": "Green Salad", "price": 8.95 }
        ]
      }
];

const getQuiche = () => {
    return quiche;
}

module.exports = {
    getQuiche,
  };