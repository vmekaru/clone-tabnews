const calculadora = require("../models/calculadora.js");

test("somar 3 + 7 igual a 10", () => {
  const resultado = calculadora.somar(3, 7);
  expect(resultado).toBe(10);
});

test("somar 'banana' + 7 deve retornar erro", () => {
  const resultado = calculadora.somar("banana", 7);
  expect(resultado).toBe("Erro");
});
