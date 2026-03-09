
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

console.log("Suma 5 + 3 =", sumar(5, 3));
console.log("Resta 10 - 4 =", restar(10, 4));

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir entre cero";
  }
  return a / b;
}

console.log("Multiplicación 6 x 7 =", multiplicar(6, 7));
console.log("División 10 / 2 =", dividir(10, 2));
console.log("División 5 / 0 =", dividir(5, 0));

function promedio(numeros) {
  if (numeros.length === 0) return "Error: Lista vacía";
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return suma / numeros.length;
}

console.log("Promedio [8, 9, 7] =", promedio([8, 9, 7]));
console.log("Promedio [] =", promedio([]));

console.log("= Calculadora lista =");