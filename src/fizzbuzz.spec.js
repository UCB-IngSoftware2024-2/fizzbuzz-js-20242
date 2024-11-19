import { generarFizzBuzzDe, fizzbuzz } from "./fizzbuzz";

describe("Fizzbuzz de un numero", () => {
  it("Numero sin regla", () => {
    expect(generarFizzBuzzDe(1)).toEqual("1");
  });

  it("Regla de Fizz para 3", () => {
    expect(generarFizzBuzzDe(3)).toEqual("Fizz");
  });

  it("Regla de Buzz para 5", () => {
    expect(generarFizzBuzzDe(5)).toEqual("Buzz");
  });

  it("Regla de Fizz para multiplos de 3", () => {
    expect(generarFizzBuzzDe(6)).toEqual("Fizz");
    expect(generarFizzBuzzDe(9)).toEqual("Fizz");
  });

  it("Regla de Buzz para multiplos de 5", () => {
    expect(generarFizzBuzzDe(10)).toEqual("Buzz");
    expect(generarFizzBuzzDe(20)).toEqual("Buzz");
  });

  it("Regla FizzBuzz para multiplos de 3 y 5", () => {
    expect(generarFizzBuzzDe(15)).toEqual("FizzBuzz");
    expect(generarFizzBuzzDe(30)).toEqual("FizzBuzz");
  });

  describe("Fizzbuzz de una secuencia", () => {
    it("Genera la secuencia hasta el numero especificado", () => {
      expect(fizzbuzz(3)).toEqual("1, 2, Fizz");
      expect(fizzbuzz(5)).toEqual("1, 2, Fizz, 4, Buzz");
    });
  });
});
