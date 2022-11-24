function exer2(num1, num2) {
  const result = num1 + num2;
  return `${result}`;
}

console.log(exer2(6, 4));

function exer2B(num1, num2) {
  const resultB = num1 >= num2;
  return `${resultB}`;
}

console.log(exer2B(5, 4));

function exerC(number) {
  const resultC = number % 2 === 0;

  return `${resultC}`;
}

console.log(exerC(10));

function exerD(salar) {
  const resultD = salar - salar * 0.1;

  return `${resultD}`;
}

console.log(exerD(1000));
