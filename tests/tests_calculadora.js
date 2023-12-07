// tests/test_calculadora.js
const {
    sumar,
    restar,
    multiplicar,
    dividir
  } = require('../calculadora');
  
  // Pruebas para la función de suma
  test('Sumar 1 + 2 debe ser igual a 3', () => {
    expect(sumar(1, 2)).toBe(3);
  });
  
  // Pruebas para la función de resta
  test('Restar 5 - 3 debe ser igual a 2', () => {
    expect(restar(5, 3)).toBe(2);
  });
  
  // Pruebas para la función de multiplicación
  test('Multiplicar 2 * 4 debe ser igual a 8', () => {
    expect(multiplicar(2, 4)).toBe(8);
  });
  
  // Pruebas para la función de división
  test('Dividir 10 / 2 debe ser igual a 5', () => {
    expect(dividir(10, 2)).toBe(5);
  });
  
  test('Dividir por cero devuelve un mensaje de error', () => {
    expect(dividir(10, 0)).toBe('No se puede dividir por cero');
  });
  