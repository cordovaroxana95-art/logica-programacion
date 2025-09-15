/**
 * Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
*Debe analizar los números, identificar cual es el número mayor, 
el número del centro y el número menor.
*Debe imprimir los números por consola o por el DOM ordenados de mayor a menor,
 y de menor a mayor.
*Debe ser capaz de identificar si los números son iguales e imprimir un mensaje 
por consola o por el DOM diciendo que los números son iguales.
*/ 

//solicitar 3 numeros

function ordenarNumeros(){
        const num1 = (prompt("porfavor dame el primer numero:"));
        const num2 = (prompt("porfavor dame el segundo numero:"));
        const num3 = (prompt("porfavor dame el tercer numero:"));
}

//verificar que los numeros sean validos
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("porfavor ingresa solo numeros");
    return; // Detener la ejecución si hay entradas no válidas
}

//convertir los numeros a tipo numero
const numero1 = Number(num1);
const numero2 = Number(num2);
const numero3 = Number(num3);
if (numero1 === numero2 && numero2 === numero3) {
    console.log("los numeros son iguales");
    return; // Detener la ejecución si los números son iguales
}

//convertir los numeros a tipo numero