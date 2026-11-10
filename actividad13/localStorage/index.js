// Referenciamos elementos del DOM a partir de su ID
const botonEvento = document.getElementById("boton-evento")
const carrito = document.getElementById("carrito")


//Escuchador
botonEvento.addEventListener('click', (evento) => {
    // Cuerpo del callback listener
    cantidadArticulos++
    carrito.textContent = cantidadArticulos
 
    // Guardamos el nuevo valor para que persista al recargar la página
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(cantidadArticulos))
})
 

// Persistencia con localStorage
const CLAVE_CARRITO = "cantidadCarrito"

// Si no hay nada guardado, getItem devuelve null -> usamos 0 como valor inicial
let cantidadArticulos = JSON.parse(localStorage.getItem(CLAVE_CARRITO)) ?? 0

// Al cargar la página, mostramos en el header la cantidad que había guardada
carrito.textContent = cantidadArticulos

