// https://basarat.gitbooks.io/typescript/content/docs/destructuring.html

function destructuring() {
  // Structuring
  var destructure = {
    foo: {
      bar: 123
    }
  };
  console.log(destructure);

  // Extracting values
  var rectangle = { x: 0, y: 10, width: 15, height: 20 };
  var { x, y, width, height } = rectangle;
  console.log(x, y, width, height);

  // Neat trick - assign to existing variables using outer parentheses
  rectangle.x = 10;
  ({ x, y, width, height } = rectangle);
  console.log(rectangle);

  // Weirdness
  const obj = { thisismyname: "pssst... Jan..." };
  const { thisismyname: someProperty } = obj;
  console.log(someProperty);

  // Deep data
  var {
    foo: { bar }
  } = destructure;
  console.log(bar);

  // Rest parameters
  var { b, c, ...remaining } = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  // Will inlude a in remaining.
  console.log(remaining);

  // Ignore properties
  function goto(point2D: { x: number; y: number }) {
    console.log(point2D);
  }
  const point3D = { x: 1, y: 2, z: 3 };
  const { z, ...point2D } = point3D;
  goto(point2D);

  // Array
  var x = 1,
    y = 2;
  [x, y] = [y, x];
  console.log(x, y);

  // Array with rest
  var [x, y, ...remainder] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(x, y, remainder);

  // Array with ignores - by index
  var [x, , , ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(x, rest);
}

destructuring();
