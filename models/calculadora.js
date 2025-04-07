function somar(a, b) {
  if (typeof a == "string" || typeof b == "string") return "Erro";
  return a + b;
}

exports.somar = somar;
