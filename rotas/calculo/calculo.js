module.exports = {
  calculateDivisor(n) {
    const number = parseInt(n);
    var result = new Array();
    for (i = 1; i <= number; i++) {
      if (number % i == 0) {
        result.push(i);
      }
    }
    return result;
  },

  primeNumbersDivisor(num) {
    const number = parseInt(num);
    var result = new Array();
    for (i = 1; i <= number; i++) {
      if (number % i == 0) {
        if (this.isPrime(i)) {
          result.push(i);
        }
      }
    }
    return result;
  },

  primeNumbers(num) {
    let numbers = new Array();
    for (var i = 0; i <= num; i++) {
      if (this.isPrime(i)) {
        numbers.push(i);
      }
    }
    return numbers;
  },

  isPrime(num) {
    for (let i = 1; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  },
};
