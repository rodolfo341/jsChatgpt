// ej 1
console.log("Manchas");

// ej2
console.log(5 + 3);

// ej 3
console.log("El resultado es: " + (5 + 3));

// ej 4
console.log(true);

// ej 5
// este es mi primer script

// desafio final
console.log("Hola me llamo, Manchas");
console.log("mi edad es de 8 años");
console.log("y me gusta hacer cagadas");

// CAPITULO 2

// ej 1 Crea una variable nombre y guárdale tu nombre.
let nombre = "Manchas";

// ej 2 Crea una variable edad y guárdale tu edad.
let edad = 8;

// ej 3 Crea una variable gustaJugar y guárdale true o false.
let gustaJugar = true;

// ej 4 Crea una variable comidaFavorita y no le pongas ningún valor aún.
let comidaFavorita;

// ej 5 Muestra en consola las 4 variables.
console.log(nombre);
console.log(edad);
console.log(gustaJugar);
console.log(comidaFavorita);

// 🔥 DESAFÍO FINALconsole.log();

// Crea estas variables y muéstralas en una frase con console.log():
// nombreMascota: nombre de tu mascota
// raza: raza o tipo de animal
// edadMascota: su edad
// jugueteFavorito: algún juguete
// esTravieso: true o false
let nombreMascota = "gato";
let raza = "kiltro";
// let edadMascota = 3;
let jugueteFavorito = "estambre";
let esTravieso = true;
// Ejemplo de salida en consola:
console.log("Mi mascota se llama " + nombreMascota + ", es un " + raza + " de " + edadMascota + " años. Su juguete favorito es " + jugueteFavorito + " ¿Es travieso? " + esTravieso);

/**** Capitulo 3 *****/
// Ejercicios
// 1.- Suma dos números y muestra el resultado.
let a = 3;
let b = 5;
let c = a + b;
console.log(c);

// 2.- Resta dos números y muestra el resultado.
c = b - a;
console.log(c)

// 3.- Multiplica dos números y muestra el resultado.
c = a * b;
console.log(c)

// 4.- Divide dos números y muestra el resultado.
c = a / b;
console.log(c)

// 5.- Usa el operador % con dos números.
c = b % a;
console.log(c)

// 6.- Compara si 10 es mayor que 5.
c = 10 > 5;
console.log(c)

// 7.- Compara si 4 es igual a "4" usando ==.
c = 4 == "4";
console.log(c)

// 8.- Compara si 4 es estrictamente igual a "4" usando ===.
c = 4 === "4";
console.log(c)

// 9.- Usa && para ver si dos condiciones se cumplen.
if ( 4 == "4" && 4 === "4") {
    console.log(true)
}

// 10.- Usa || para ver si al menos una condición se cumple.
if ( 4 == "4" || 4 === "4") {
    console.log(true)
}

// 11.- Usa ! para negar un valor booleano.
c = !true;
console.log(c);

// Desafío Final
// Crea un pequeño “reporte” de mascota como este, pero que use operadores y comparaciones:

// let edadMascota = 3;
// let esCachorro = edadMascota < 2;
// let tieneJuguete = true;
let edadMascota = 3;
let esCachorro = edadMascota < 2;
let tieneJuguete = true;
console.log("¿Es cachorro? " + esCachorro);
console.log("¿Es cachorro y tiene juguete? " + (esCachorro && tieneJuguete));
console.log("¿No es cachorro? " + !esCachorro);
