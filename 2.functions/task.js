function getArrayParams(...arr) {
  return {
      min: Math.min(...arr),
      max: Math.max(...arr),
      avg: Number((arr.reduce((accumulator, number) => accumulator + number, 0) / arr.length).toFixed(2))
  };
}


function summElementsWorker(...arr) {
  return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0);

}

function differenceMaxMinWorker(...arr) {
  return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenNumbers = arr.filter(item => item % 2 === 0).reduce((accumulator, currentValue) => accumulator + currentValue,
  0,);
  let sumOldNumbers = arr.filter(item => item % 2 !== 0).reduce((accumulator, currentValue) => accumulator + currentValue,
  0,);

  return arr.lenght === 0 ? 0 : sumEvenNumbers - sumOldNumbers;
}

function averageEvenElementsWorker(...arr) {
  return arr.filter(item => item % 2 === 0).reduce((accumulator, number, index, filteredArray) => accumulator + number / filteredArray.length, 0);
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  
  for (let i = 0; i < arrOfArr.length; i++) {
      let max = func(...arrOfArr[i]);
      if (max > maxWorkerResult) {
        maxWorkerResult = max;
    }
  }
  return maxWorkerResult;
}

