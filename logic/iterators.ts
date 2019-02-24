// https://basarat.gitbooks.io/typescript/content/docs/iterators.html

// Iterator is a Behavioral Design Pattern common
// for Object oriented programming languages.

// interface Iterator<T> {
//     next(value?: any): IteratorResult<T>;
//     return?(value?: any): IteratorResult<T>;
//     throw?(e?: any): IteratorResult<T>;
// }

class Fib implements IterableIterator<number> {
  protected fn1 = 0;
  protected fn2 = 1;

  constructor(protected maxValue?: number) {}

  public next(): IteratorResult<number> {
    var current = this.fn1;
    this.fn1 = this.fn2;
    this.fn2 = current + this.fn1;
    if (this.maxValue != null && current >= this.maxValue) {
      return {
        done: true,
        value: null
      };
    }
    return {
      done: false,
      value: current
    };
  }

  [Symbol.iterator](): IterableIterator<number> {
    return this;
  }
}

let fib = new Fib();
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());

let fibMax50 = new Fib(50);
console.log(Array.from(fibMax50));

let fibMax21 = new Fib(21);
for (let num of fibMax21) {
  console.log(num);
}
