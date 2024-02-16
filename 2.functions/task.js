function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
      min = Math.min(min, ...arr)
      max = Math.max(max, ...arr)
      
     sum = arr.reduce(function (acc, val) {
        return acc + val
      })
    let avg = (sum / arr.length).toFixed(2);
    avg = Number(avg);

  return {
      min: min,
      max: max,
      avg: avg
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
  maxWorkerResult = arrOfArr[0];
  
  for (let i = 0; i < arrOfArr.length; i++) {
      let max = func(...arrOfArr);
      if (max > maxWorkerResult) {
        maxWorkerResult = max;
  }
  }
  return maxWorkerResult;
}

