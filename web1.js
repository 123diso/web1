//primero
const personas = [
{ nombre: "Ana", edad: 30 },
{ nombre: "Luis", edad: 25 },
{ nombre: "Marta", edad: 40 }
];

//...con reduce 
function sumarEdades(personas) {
    return personas.reduce((total, persona) => total + persona.edad, 0);
}
console.log(sumarEdades(personas)); 
//...conforeach 



//segundo

const productos = [
{ nombre: "Libro", precio: 30 },
{ nombre: "Auriculares", precio: 60 },
{ nombre: "Teclado", precio: 70 }
];

function filtrarProductos(productos) {
return productos.filter(producto => producto.precio > 50);
}

console.log(filtrarProductos(productos));

//tercero
const estudiantes = [
{ nombre: "Carlos", calificación: 85 },
{ nombre: "Lucía", calificación: 92 }
];

function encontrarEstudiante(estudiantes, nombreBuscado) {
return estudiantes.find(est => est.nombre === nombreBuscado) || null;
}

console.log(encontrarEstudiante(estudiantes, "Pedro")); 

//cuarto

const lista = [
{ nombre: "Monitor", precio: 200 },
{ nombre: "Ratón", precio: 25 },
{ nombre: "Teclado", precio: 50 }
];

function ordenarProductosPorPrecio(productos) {
return [...productos].sort((a, b) => a.precio - b.precio);
}

console.log(ordenarProductosPorPrecio(lista));

//quinto

const grupo1 = [
{ nombre: "Sara", edad: 20 },
{ nombre: "Iván", edad: 35 }
];
const grupo2 = [
{ nombre: "Sara", edad: 25 },
{ nombre: "Iván", edad: 15 }
];

function combinarPersonas(arr1, arr2) {
return arr1.map((persona, index) => ({
    nombre: persona.nombre,
    edad: persona.edad + (arr2[index]?.edad || 0)
}));
}

console.log(combinarPersonas(grupo1, grupo2));
