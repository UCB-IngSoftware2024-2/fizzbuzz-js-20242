function generarFizzBuzzDe(numero) {
  if (esMultiploDe3(numero) && esMultiploDe5(numero)) {
    return "FizzBuzz";
  }
  if (esMultiploDe3(numero)) {
    return "Fizz";
  }
  if (esMultiploDe5(numero)) {
    return "Buzz";
  }
  return numero.toString();
}

function fizzbuzz(n) {
  let aux = "";
  for (let i = 1; i <= n; i++) {
    aux += generarFizzBuzzDe(i);
    if (i != n) aux += ", ";
  }
  return aux;
}

function esMultiploDe3(numero) {
  return numero % 3 === 0;
}

function esMultiploDe5(numero) {
  return numero % 5 === 0;
}

export { generarFizzBuzzDe, fizzbuzz };
