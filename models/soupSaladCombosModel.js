let soupSaladCombos = [
  {
    "name": "French Onion or Soup of the Day",
    "price": 4.95
  },
  {
    "name": "French Onion or Soup of the Day Combos",
    "combos": [
      {
        "side": "with small green salad, fresh fruit or house pasta",
        "price": 7.25
      },
      {
        "side": "with half pasta of the day",
        "price": 8.75
      }
    ]
  }
];

const getCombos = () => {
  return soupSaladCombos;
};

module.exports = {
  getCombos,
};