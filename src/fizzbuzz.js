class FizzBuzz {
  generarFizzBuzzDe(numero) {
    const FIZZ = 3;
    const BUZZ = 5;
    if (this.esMultiplo(numero, FIZZ) && this.esMultiplo(numero, BUZZ)) {
      return "FizzBuzz";
    }
    if (this.esMultiplo(numero, FIZZ)) {
      return "Fizz";
    }
    if (this.esMultiplo(numero, BUZZ)) {
      return "Buzz";
    }
    return numero.toString();
  }

  fizzbuzz(n) {
    let aux = "";
    for (let i = 1; i <= n; i++) {
      aux += this.generarFizzBuzzDe(i);
      if (i != n) aux += ", ";
    }
    return aux;
  }

  esMultiplo(numero, multiplo) {
    return numero % multiplo === 0;
  }
}
export default FizzBuzz;
