function twice(number) {
  return 2 * number;
}

function doubles(numbers) {
  let doubledNumbers = [];
  for (const num of numbers) {
    doubledNumbers.push(twice(num));
  }
  return numbers;
}

function main() {
  let mainNumbers = [2, 4, 1, 6];
  console.log(mainNumbers);
  doubles(mainNumbers);
  console.log(mainNumbers);
}
