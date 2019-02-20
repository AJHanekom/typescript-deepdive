type IdDisplay = {
  id: string;
  display: string;
};
const list: IdDisplay[] = [
  {
    id: "foo",
    display: "Foo Select"
  },
  {
    id: "bar",
    display: "Bar Select"
  }
];

const fooIndex = list.map(i => i.id).indexOf("foo");
console.log(list.map(i => i.id));
console.log(fooIndex);

function toInt2(str: string) {
  return str ? parseInt(str) : undefined;
}

function toInt(str: string): { valid: boolean; int?: number } {
  const int = parseInt(str);
  if (isNaN(int)) {
    return { valid: false };
  } else {
    return { valid: true, int };
  }
}

console.log(JSON.stringify({ name: "Jan", surname: null }));

function foo() {
  console.log(this);
}

foo();

let bar = {
  foo
};

bar.foo();

function outerFunction(arg) {
  var variableInOuterFunction = arg;
  return function() {
    console.log(variableInOuterFunction);
  };
}

var innerFunction = outerFunction("hello closure!");

innerFunction();

function createCounter() {
  let val = 0;
  return {
    increment() {
      val++;
    },
    getVal() {
      return val;
    }
  };
}

let counter = createCounter();
counter.increment();
console.log(counter.getVal());
counter.increment();
console.log(counter.getVal());

console.log(0.1 + 0.2);

console.log({ max: Number.MAX_SAFE_INTEGER });

function Foos() {}

var foos = new Foos();

console.log(foos.__proto__); // True!
console.log(foos.__proto__ === Foos.prototype); // True!

class Person {
  constructor(public age: number) {}
  growOld = () => {
    this.age++;
  };
}
var person = new Person(1);
var growOld = person.growOld;
// Then later someone else calls it:
growOld();
growOld();
growOld();
console.log(person);

var test = ["a", "b", "c"];

// Rest parameter
function testing(a, b, ...c) {}

let myname = "123";
if (true) {
  let myname = "1234";
}

console.log(myname);


var funcs = [];
// create a bunch of functions
for (var i = 0; i < 3; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}