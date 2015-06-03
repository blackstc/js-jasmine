module.exports = {
  changeToUpper: function(arr) {
      var hold = [];
      for (var i = 0; i < arr.length; i++) {
          hold.push(arr[i].toUpperCase());
      }
      return hold;
  },
  getColors: function(a) {
      for (var i = 0; i < a.length; i++) {
          return a[i].color;
      }
  },
  findGreatestStrength: function(o) {
      var greatestStrength = 0;
      for (var i = 0; i < o.length; i++) {
          if (o[i].strength > greatestStrength) {
              greatestStrength = o[i];
          }
      }
      return greatestStrength;
  }
};
