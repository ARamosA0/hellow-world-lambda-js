const sayHello = require("../index.js").sayHello;

test("debe imprimir mi hello world", () => {
  const result = sayHello();
  expect(result).toBe("Hello World")
})
