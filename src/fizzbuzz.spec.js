import FizzBuzz from "./fizzbuzz";

describe("Fizzbuzz de un numero", () => {
  it("Numero sin regla", () => {
    let fb = new FizzBuzz();
    expect(fb.generarFizzBuzzDe(1)).toEqual("1");
  });

  it("Regla de Fizz para 3", () => {
    let fb = new FizzBuzz();
    expect(fb.generarFizzBuzzDe(3)).toEqual("Fizz");
  });

  it("Regla de Buzz para 5", () => {
    let fb = new FizzBuzz();
    expect(fb.generarFizzBuzzDe(5)).toEqual("Buzz");
  });

  it("Regla de Fizz para multiplos de 3", () => {
    let fb = new FizzBuzz();
    expect(fb.generarFizzBuzzDe(6)).toEqual("Fizz");
    expect(fb.generarFizzBuzzDe(9)).toEqual("Fizz");
  });

  it("Regla de Buzz para multiplos de 5", () => {
    let fb = new FizzBuzz();
    expect(fb.generarFizzBuzzDe(10)).toEqual("Buzz");
    expect(fb.generarFizzBuzzDe(20)).toEqual("Buzz");
  });

  it("Regla FizzBuzz para multiplos de 3 y 5", () => {
    let fb = new FizzBuzz();
    expect(fb.generarFizzBuzzDe(15)).toEqual("FizzBuzz");
    expect(fb.generarFizzBuzzDe(30)).toEqual("FizzBuzz");
  });

  describe("Fizzbuzz de una secuencia", () => {
    it("Genera la secuencia hasta el numero especificado", () => {
      let fb = new FizzBuzz();
      expect(fb.fizzbuzz(3)).toEqual("1, 2, Fizz");
      expect(fb.fizzbuzz(5)).toEqual("1, 2, Fizz, 4, Buzz");
    });
  });
});
