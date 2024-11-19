function generarFizzBuzzDe(numero) {
  if (esMultiplo(numero, 3) && esMultiplo(numero, 5)) {
    return "FizzBuzz";
  }
  if (esMultiplo(numero, 3)) {
    return "Fizz";
  }
  if (esMultiplo(numero, 5)) {
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

function esMultiplo(numero, multiplo) {
  return numero % multiplo === 0;
}

export { generarFizzBuzzDe, fizzbuzz };
