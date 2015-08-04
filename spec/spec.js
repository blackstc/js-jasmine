var code = require('./../app.js');

describe('Change to Upper', function() {
  it('should change array to upperCase', function() {
    expect(code.changeToUpper(["charlie", "yusef"])).toEqual(["CHARLIE", "YUSEF"]);
  });
});

describe('Get Colors', function() {
  it('should return the color from and object array', function() {
    expect(code.getColors([{color: "Green"}])).toEqual("Green");
  });
});

describe('Find Greatest Strength', function() {
  it('should the object with the greatest strength', function() {
    expect(code.findGreatestStrength([{name: "charlie", strength: 25}, {name:"yusef", strength: 30}])).toEqual({name:"yusef", strength: 30});
  });
});
