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
// let edad = 8;

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
if (4 == "4" && 4 === "4") {
    console.log(true)
}

// 10.- Usa || para ver si al menos una condición se cumple.
if (4 == "4" || 4 === "4") {
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



/******* capitulo 4 *******/
// 🧪 Ejercicios:
// 1. Verifica si un número es positivo
let numero = 4;
// si es mayor que 0 muestra "Es positivo", si no, "No es positivo"
if (numero > 0) {
    console.log("Es positivo")
} else {
    console.log("No es positivo")
}

// 2. Verifica si una persona puede votar (mayor de 18)
let edad = 16;
// si tiene 18 o más, "Puede votar", si no, "No puede votar"
if (edad >= 18) {
    console.log("Puede votar ")
} else {
    console.log("No puede votar");
}

// 3. Revisa si una contraseña es correcta
let clave = "1234";
let claveIngresada = "1234";
// si son iguales, "Acceso permitido", si no, "Clave incorrecta"
if (clave === claveIngresada) {
    console.log("Acceso permitido")
} else {
    console.log("Clave incorrecta")
}

// 4. Clasifica un número
let x = 0;
// si es positivo → "Positivo"
// si es negativo → "Negativo"
// si es cero → "Es cero"
if (x > 0) {
    console.log("Positivo");
} else if (x < 0) {
    console.log("Negativo");
} else {
    console.log("Es cero")
}

// Desafío Final:
// Sistema de clima y ropa

// Usa if, else if y else para mostrar qué ropa usar según el clima:
let clima = "lluvioso"; // soleado, nublado o lluvioso
if (clima === "lluvioso") {
    console.log("No olvides el paraguas");
} else if (clima === "nublado") {
    console.log("Lleva chaqueta ligera");
} else if (clima === "soleado") {
    console.log("Usa lentes de sol");
}
// si es soleado → "Usa lentes de sol"
// si es nublado → "Lleva chaqueta ligera"
// si es lluvioso → "No olvides el paraguas"




/***** capitulo 5  ******/
// 1.- Bucle for:
// Crea un bucle for que imprima los números del 1 al 5 en la consola.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2.- Crea un bucle while que imprima los números del 1 al 5 en la consola.    
i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Crea un bucle do...while que imprima los números del 1 al 5 en la consola.
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// 4. Bucle con arreglo:
// Crea un arreglo con 3 nombres y usa un bucle for para imprimir cada nombre en la consola.
let colores = ['rojo', 'verde', 'azul'];
for (let j = 0; j < colores.length; j++) {
    console.log(colores[j]);
}

// 5. Bucle con break:
// Crea un bucle que imprima los números del 1 al 10, pero que se detenga cuando llegue al número 6.
for (let k = 1; k <= 10; k++) {
    if (k === 6) {
        break
    }
    console.log(k);
}

// 6. Bucle con continue:
// Crea un bucle que imprima los números del 1 al 10, pero que se salte el número 5.
for (let l = 1; l <= 10; l++) {
    if (l === 5) {
        continue;
    }
    console.log(l);
}

// Desafío Final:
// Crea un bucle for que imprima los números del 1 al 20, pero que:

// Imprima "Fizz" si el número es divisible por 3.

// Imprima "Buzz" si el número es divisible por 5.

// Imprima "FizzBuzz" si el número es divisible por 3 y 5.

// De lo contrario, solo imprime el número.

for (let m = 1; m <= 20; m++) {
    if ((m % 3 === 0) && (m % 5 === 0)) {
        console.log("FizzBuzz");
        continue;
    } else if (m % 5 === 0) {
        console.log("Buzz");
        continue;
    } else if (m % 3 === 0) {
        console.log("Fizz");
        continue;
    } else {
        console.log(m);
    }

}




/***** capitulo 6 *****/

// Ejercicios (¡tú los resuelves!):
// Crea una función llamada saludarUsuario que reciba un nombre y muestre "Hola, [nombre]!" en la consola.
let nom = "Manchas";
saludarUsuario(nom);
function saludarUsuario(nombre) {
    console.log(`Hola, ${nombre}!`)
}

// Crea una función llamada doble que reciba un número y retorne el doble de ese número.
let num = 4;
console.log(`El dobre de ${num} es: ${doble(num)}`)
function doble(num) {
    return num * 2;
}

// Crea una función llamada esPar que reciba un número y retorne true si es par, false si no.
function esPar(num) {
    return num % 2 === 0;
}

// Crea una función llamada areaRectangulo que reciba base y altura y retorne el área.
console.log(areaRectangulo(3, 5));
function areaRectangulo(b, a) {
    return a * b;
}

// Crea una función llamada imprimirNumeros que imprima del 1 al número que le pases como parámetro.
num = 10;
imprimirNumeros(num);
function imprimirNumeros(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}

// Crea una función llamada evaluarNota que reciba una nota (número del 1 al 10) y devuelva un mensaje según la nota:

// 1 a 3 → "Reprobado"
// 4 a 5 → "En proceso"
// 6 a 10 → "Aprobado"

let nota = 5;
console.log(evaluarNota(5))
function evaluarNota(nota) {
    if (nota <= 3) return "Reprobado";
    else if (nota <= 5) return "En proceso";
    else if (nota <= 10) return "Aprobado";
    else return "error";
}



/****** capitulo 7 *****/
// Crea un arreglo con tus 3 comidas favoritas.
let comidas = ["fideos", "asado", "cazuela"];

// Muestra la segunda comida en la consola.
console.log(comidas[1]);

// Agrega una nueva comida al final del arreglo.
comidas.push("arroz");

// Elimina la primera comida del arreglo.
comidas.shift();

// ¿Cuántas comidas hay ahora en el arreglo?
console.log(comidas.length);

// Verifica si la comida "pizza" está en el arreglo.
if (comidas.includes("pizza")) console.log(true);
else console.log(false);

// Une las comidas con comas y muéstralas como un solo string.
console.log(comidas.join(","));

// Crea un nuevo arreglo con solo las dos primeras comidas usando .slice().
let comidas2 = comidas.slice(0, 2);

// Quita la segunda comida del arreglo original usando .splice().
comidas.splice(1, 1);

// Crea una función llamada mostrarLista que reciba un arreglo y:
function mostrarLista(arre) {
    if (arre.length === 0) console.log("La lista esta vacia");
    else {
        for (let ii = 0; ii < arre.length; ii++) {
            console.log(`${ii + 1} ${arre[ii]}`);
        }
    }
}
// Si el arreglo está vacío, diga: "La lista está vacía".

// Si no, que imprima cada elemento con su número, así:

// 1. manzana
// 2. plátanoii
// 3. naranja
const robot = {
    modelo: "Asimov",
    energia: 26,
    recargar: function () {
        this.energia += 10;
    },
    estado: function () {
        console.log(`Soy el modelo ${this.modelo} y tengo ${this.energia} unidades de energía.`);
    },
    usarEnergia: function (x) {
        this.energia -= x;
    },
    estado: function () {
        console.log(`${this.modelo} tiene ${this.energia}% de energía.`);
    },
    actualizarModelo: function (cadena) {
        this.modelo = cadena;
    }
};

