import { program } from "./script";

describe("Capitalize", () => {
  test("capital the first letter", () => {
    expect(program.copitalize("book")).toBe("Book");
  });

  test("only the first letter is capital", () => {
    expect(program.copitalize("boOk")).toBe("Book");
  });

  test("Don't care about other character", () => {
    expect(program.copitalize("hello world!")).toBe("Hello world!");
  });
});

describe("Reverse", () => {
  test("Just return the opposite", () => {
    expect(program.reverse("book")).toBe("koob");
  });
});

describe("Calculator", () => {
  test("3 - 3 have to be 0", () => {
    expect(program.calculator.subtract(3, 3)).toBe(0);
  });
  test("3 / 3 is 1", () => {
    expect(program.calculator.divide(3, 3)).toBe(1);
  });
  test("Could not divide by 0", () => {
    expect(program.calculator.divide(3, 0)).toEqual("Could divide with 0.");
  });
  test("3 * 3 is 9.", () => {
    expect(program.calculator.multiply(3, 3)).toBe(9);
  });
});

describe("CaesarCipher", () => {
  test("crose index ", () => {
    expect(program.caesarCipher("xyz", 3)).toBe("abc");
  });
  test("no sifht", () => {
    expect(program.caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("do not mesh with other", () => {
    expect(program.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("AnalyzeArray", () => {
  test("It should expected object", () => {
    expect(program.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
