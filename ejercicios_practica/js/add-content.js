var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 13) {
    greeting = "Buenas Tardes";
} else if (hourNow < 13) {
    greeting = "Buen dia";
} else {
    greeting= "Bienvenido!";
}

document.write('<h3>' + greeting + '</h3>');

/* var es variable keyword */

// es una forma de comentar la sentencia después del ;
// cuando la variable es de mas de una palabra se usa camel case en la segunda ej: var expedienteGit

// Para asignar valor a una variable se usa el = y se cierra con ;

// javascrip los tipos de datos son : numeros, strings, booleans que pueden ser true or false




