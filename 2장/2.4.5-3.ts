type add = (a: number, b: number) => number;

const adder:add = (x, y) => x + y;

console.log(adder(2, 4));

type Operation = (x : number, y : number) => number;
function calculate(op: Operation, a: number, b: number):number {
  return op(a, b);
}
const multiply:Operation = (x, y) => x * y;
console.log(calculate(multiply, 4, 5));
