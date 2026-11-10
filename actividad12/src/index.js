//Actividad 1 Arreglos
//Ejercicio A y B
const numeros = [];
console.log("Ejercicio A");

for (let i = 0; i < 5; i++) {
    const elemento = prompt("Ingrese un número para agregar al arreglo:");
    if (elemento !== null && !isNaN(elemento) && elemento > 0 && elemento % 2 !== 0) {
        numeros.push(elemento);
    }
    else {
        console.log("Por favor, ingresa un número entero válido mayor a 0 e impar.");
        i--; // 
    }
}

numeros.forEach((numero)=>{
    console.log(numero)
})

//Ejercicio C
console.log("Ejercicio C");
const frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice) => {
    frutas[indice] = fruta.toUpperCase();
});

console.log("Array de frutas en mayúsculas:", frutas);

//Ejercicio D
console.log("Ejercicio D");
const frutasMayusculas = frutas.map((fruta) => {
    return fruta.toUpperCase();
});

console.log("Array nuevo de frutas en mayúsculas:", frutasMayusculas);

//Ejercicio E
console.log("Ejercicio E");
const frutasConNa = frutas.filter((fruta) => {
    if (fruta.includes("na")) {
        return true;
    } else {
        return false;
    }
});

console.log("Nuevo arreglo (filtrado):", frutasConNa);

//Actividad 2 Objetos
//Ejercicio A
console.log("Ejercicio A");

//Creamos el objeto
const productoIndumentaria = {
    nombre: "Remera Oversize Cotton",
    precio: 18500,
    stock: 12,
    talles: ["S", "M", "L"]
};

//Creamos un array con objetos dentro de sí

const productos = [
    {
        nombre: "Buzo Hoodie Negro",
        precio: 35000,
        stock: 3,
        talles: ["S", "M", "L"]
    },
    {
        nombre: "Pantalón Cargo Olive",
        precio: 42000,
        stock: 12,
        talles: ["S", "M", "L"]
    },
    {
        nombre: "Campera Denim Classic",
        precio: 65000,
        stock: 2, 
        talles: ["S", "M", "L"]
    },
    {
        nombre: "Remera Básica Blanca",
        precio: 15000,
        stock: 15,
        talles: ["S", "M", "L"]
    }
];

console.log("Productos con stock menor a 5");

productos.forEach((producto) => {
    if (producto.stock < 5) {
        console.log(`Producto con bajo stock: ${producto.nombre} | Stock restante: ${producto.stock}`);
    }
});

//Ejercicio C
console.log("Ejercicio C");
const productosDescuento = productos.map((producto) => {
    return {
        ...producto,
        precio: producto.precio - (producto.precio * 0.1)
    };
});
console.log("Productos con descuento:", productosDescuento);

//Ejercicio D
console.log("Ejercicio D");
const productosConStockMayor10 = productos.filter((producto) => {
    if (producto.stock > 10) {
        return true;
    }else{
        return false;
    }
});

console.log("Productos con stock mayor a 10:", productosConStockMayor10);