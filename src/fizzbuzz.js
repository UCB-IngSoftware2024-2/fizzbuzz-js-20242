function generarFizzBuzzDe(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  }
  if (numero % 3 === 0) {
    return "Fizz";
  }
  if (numero % 5 === 0) {
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

export { generarFizzBuzzDe, fizzbuzz };
