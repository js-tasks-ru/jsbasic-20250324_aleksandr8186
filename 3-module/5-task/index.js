function getMinMax(str) {
  numbers = str.split(' ');

  let minNum = Infinity;
  let maxNum = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
      const num = parseFloat(numbers[i]);
      if (!isNaN(num)) {
          if (num < minNum) {
              minNum = num;
          }
          if (num > maxNum) {
              maxNum = num;
          }
      }
  }

  return {'min':minNum, 
          'max':maxNum};
}
