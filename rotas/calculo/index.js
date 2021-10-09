const router = require("express").Router();
const requ = require("readline");
const calculo = require("./calculo");

router.get("/:number", (req, res) => {
  res.status(200);
  const num = req.params.number
  const resultDivisors = calculo.calculateDivisor(num);
  const resultPrimers = calculo.primeNumbersDivisor(num);

  res.json({
    numero_digitado: num,
    divisores: resultDivisors,
    numeros_primos_divisores: resultPrimers,
  });
});

module.exports = router;
