// https://basarat.gitbooks.io/typescript/content/docs/spread-operator.html

function spread() {
  //The main objective of the spread operator is to spread the elements of an array or object.

  // Apply - no Function.prototype.apply
  function foo(x, y, z) {
    console.log(x, y, z);
  }
  var args = [2, 1, 3];

  foo.apply(null, args);

  // Simplified with Spread
  //foo(...args); // Error but still works

  // Use in destructuring
  var [x, y, ...remaining] = [1, 2, 3, 4];
  console.log(x, y, remaining);

  // Expanding an existing array
  var list = [1, 2];
  list = [...list, 3, 4, ...list];
  console.log(list);

  // Object Spread - same as Object.assign
  const point2D = { x: 1, y: 2 };
  const point3D = { ...point2D, z: 3 };
  const assigned = Object.assign({ z: 3, x: "newvalue" }, point2D);
  // Will override existing properties
  const override = { ...point2D, z: 3, x: 55 };
  console.log(override);

  // Shallow Extend - order matters
  var zues = { a: 1, b: 2 };
  var hades = { b: 1, c: 3 };
  var war = { ...zues, ...hades };
  console.log(war);
}
spread();
