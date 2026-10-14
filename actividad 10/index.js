// 1. ESTRUCTURAS DE CONTROL CONDICIONALES

// 1.1 Verificación de mayoría de edad
let edad = 20; //----→ para probar

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}


// 1.3 Verificación de número par o impar
let numero = 7; //----→ para probar

if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}


// 1.5 Evaluación de nota
let nota = 8; //-----→ para probar

if (nota < 4) {
    console.log("Reprobado");
} else if (nota >= 4 && nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}

// 2. ESTRUCTURAS DE CONTROL BUCLES (FOR)

// 2.1 Números del 1 al 10
console.log("--- Números del 1 al 10 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2.3 Números del 10 al 1 en orden descendente
console.log("--- Números del 10 al 1 (descendente) ---");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 2.5 y 2.7 Bucle de 20 iteraciones (desde let i = 0) combinando condicionales, módulo y template literals
console.log("--- 20 iteraciones con par/impar y template literals ---");
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}