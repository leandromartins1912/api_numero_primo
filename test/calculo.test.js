const calculo = require("../rotas/calculo/calculo");

describe("Calculo", () => {
  describe("calculateDivisor", () => {
    it("Should return array empty when negative number", () => {
      const resultCalculate = calculo.calculateDivisor(-15);
      expect(resultCalculate).toEqual(expect.arrayContaining([]));
    });

    it("Should return array containing numbers of divisor", () => {
      const resultCalculate = calculo.calculateDivisor(15);
      expect(resultCalculate).toEqual(expect.arrayContaining([1, 3, 5, 15]));
    });

    it("Should return array not containing numbers of divisor", () => {
      const resultCalculate = calculo.calculateDivisor(15);
      expect(resultCalculate).not.toEqual(
        expect.arrayContaining([1, 8, 5, 90])
      );
    });
  });

  describe("primeNumbersDivisor", () => {
    it("Should return array empty when negative number", () => {
      const resultCalculate = calculo.primeNumbersDivisor(-15);
      expect(resultCalculate).toEqual(expect.arrayContaining([]));
    });

    it("Should return array containing numbers prime of divisor", () => {
      const resultCalculate = calculo.primeNumbersDivisor(15);
      expect(resultCalculate).toEqual(expect.arrayContaining([3, 5]));
    });

    it("Should return array not containing numbers prime of divisor", () => {
      const resultCalculate = calculo.primeNumbersDivisor(15);
      expect(resultCalculate).not.toEqual(
        expect.arrayContaining([1, 8, 5, 90])
      );
    });
  });

  describe("isPrime", () => {
    it("Should return array containing numbers prime of divisor", () => {
      const resultCalculate = calculo.isPrime(-15);
      expect(resultCalculate).toEqual(expect.arrayContaining([]));
    });

    it("Should be return false if gives a less than zero", () => {
        const resultCalculate = calculo.isPrime(-15);
        expect(resultCalculate).toEqual(false);
      });

      it("Should be return true if gives a greater than zero", () => {
        const resultCalculate = calculo.isPrime(15);
        expect(resultCalculate).toEqual(false);
      });
  });
});
