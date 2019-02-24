// https://basarat.gitbooks.io/typescript/content/docs/for...of.html
function forof() {
  // Of vs In
  var fooray = ["1", 2, 3, 4, 5, 6, 7];
  for (const i in fooray) {
    // keys
    console.log(i);
  }
  for (const i of fooray) {
    // values
    console.log(i);
  }

  // String
  for (const v of "hello") {
    console.log(v);
  }

  // Use for...of only for stuff that you know to be an array or a string
}
forof();
