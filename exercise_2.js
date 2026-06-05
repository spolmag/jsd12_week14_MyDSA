function fizzbuzz(n) {
  const fizzbuzzArray = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzbuzzArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizzbuzzArray.push("Fizz");
    } else if (i % 5 === 0) {
      fizzbuzzArray.push("Buzz");
    } else {
      fizzbuzzArray.push(i);
    }
  }
  console.log(fizzbuzzArray);
}
fizzbuzz(100);
