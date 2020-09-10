function menorAMayor(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
}

function mayorAMenor(arr) {
  arr.sort((a, b) => {
    return b - a;
  });
  console.log(arr);
}

function evenIndexes(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      evenNumbers.push(i)
    }
  }
  return `Los número pares se encuentran en los índices ${evenNumbers}`;
}

menorAMayor([5, 78, 2, 98, 45, 78, 67, 100, 57, 10000]);
mayorAMenor([5, 78, 2, 98, 45, 78, 67, 100, 57, 10000]);
console.log(evenIndexes([5, 78, 2, 98, 45, 78, 67, 100, 57, 10000]));