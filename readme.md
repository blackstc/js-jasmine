# Jasmine Tests

* Write Jasmine tests inside of `spec/spec.js`.
* The code to test has already been written in app.js.
* The tests you write should confirm that the code in app.js functions as described in the example uses below (see examples section).
* When complete, all of your jasmine tests should be passing.


## Examples:

1. `changeToUpper` transforms an array of strings into an array of uppercase strings.

```
var list = ['red', 'green', 'blue'];

changeToUpper(list);
// => ['RED', 'GREEN', 'BLUE'];

```

2. `findGreatestStrength` takes in an array of objects and returns the object with the greatest strength attribute.

```
var list = [{strength: 20, name: 'A'}, {strength: 10, name: 'B'}];

findGreatestStrength(list);
//=> {strength: 20, name: 'A'}
```
