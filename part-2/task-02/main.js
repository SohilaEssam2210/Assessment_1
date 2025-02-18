//Write a JavaScript function that takes an array of numbers as an input and returns the sum of all even numbers.

function sumEvenNums(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}
console.log(sumEvenNums([1, 2, 3, 4, 5])); //6

function sumEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5])); //6
