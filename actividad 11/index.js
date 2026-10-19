// 1. FUNCIONES DE DECLARACIÓN
// a y b. Sin retorno de valor
function saludar() {
  console.log("¡Hola, bienvenido!");
}
saludar();


// c, d y e. Sin retorno de valor con parámetros y template strings
function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido!`);
}
saludarPersona("Andrés");


// f, g y h. Retorno de valor y condicionales
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

// Guardamos el valor retornado en una variable
let resultadoEdad = esMayorDeEdad(20);
console.log(`¿Es mayor de edad?: ${resultadoEdad}`);

// 2. FUNCIONES DE FLECHA
// a y b. Conversión de esMayorDeEdad a función flecha
const esMayorDeEdadFlecha = (edad) => edad >= 18;

let resultadoEdadFlecha = esMayorDeEdadFlecha(15);
console.log(`¿Es mayor de edad? (Flecha): ${resultadoEdadFlecha}`);


// d, e y f. Función flecha para comparar dos números
const compararNumeros = (parametro1, parametro2) => {
  if (parametro1 < parametro2) {
    console.log(`El número ${parametro1} es menor que ${parametro2}`);
  } else if (parametro1 === parametro2) {
    console.log(`El número ${parametro1} es igual que ${parametro2}`);
  } else {
    console.log(`El número ${parametro1} es mayor que ${parametro2}`);
  }
};

// g. Utilización de la función dentro de un bucle
console.log("--- Inicio del bucle de comparación ---");
const numeroFijo = 3;

for (let i = 1; i <= 5; i++) {
  compararNumeros(i, numeroFijo);
}
// 3. FUNCIONES CALLBACK
// b. Callback de suma
const suma = (a, b) => {
  console.log(`El resultado de la suma es ${a + b}`);
};

// b. Callback de resta
const resta = (a, b) => {
  console.log(`El resultado de la resta es ${a - b}`);
};

// a y c. Función operacion con validación de tipos de datos
const operacion = (num1, num2, callback) => {
  // Verificación de que ambos argumentos sean de tipo número
  if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
    console.log("Debe ingresar solo números.");
  } else {
    callback(num1, num2);
  }
};

// Pruebas de funcionamiento
console.log("--- Pruebas con Callbacks ---");
operacion(10, 5, suma);      // Imprime: El resultado de la suma es 15
operacion(10, 5, resta);     // Imprime: El resultado de la resta es 5
operacion(10, "5", suma);    // Imprime: Debe ingresar solo números.