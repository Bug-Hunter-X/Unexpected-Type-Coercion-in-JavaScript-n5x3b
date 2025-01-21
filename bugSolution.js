function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return NaN; // Or throw an error: throw new Error('Invalid input types');
  }
}

console.log(foo(2, '2')); // Output: NaN
console.log(foo(2,2)); //Output: 4