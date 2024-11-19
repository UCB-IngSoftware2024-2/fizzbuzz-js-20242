function generarFizzBuzzDe(numero) {
  const FIZZ = 3;
  const BUZZ = 5;
  if (esMultiplo(numero, FIZZ) && esMultiplo(numero, BUZZ)) {
    return "FizzBuzz";
  }
  if (esMultiplo(numero, FIZZ)) {
    return "Fizz";
  }
  if (esMultiplo(numero, BUZZ)) {
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
