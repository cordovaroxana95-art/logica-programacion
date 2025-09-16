/**
 * Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
*Debe analizar los números, identificar cual es el número mayor, 
el número del centro y el número menor.
*Debe imprimir los números por consola o por el DOM ordenados de mayor a menor,
 y de menor a mayor.
*Debe ser capaz de identificar si los números son iguales e imprimir un mensaje 
por consola o por el DOM diciendo que los números son iguales.
*/ 

function ordenarNumeros() {
    // 1. Solicitar los 3 números al usuario
    const num1Str = prompt("Por favor, ingresa el primer número:");
    const num2Str = prompt("Por favor, ingresa el segundo número:");
    const num3Str = prompt("Por favor, ingresa el tercer número:");

    // 2. Validar las entradas del usuario
    if (num1Str === null || num2Str === null || num3Str === null) {
        console.log("Operación cancelada por el usuario.");
        return;
    }

    const numero1 = Number(num1Str);
    const numero2 = Number(num2Str);
    const numero3 = Number(num3Str);

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        console.log("Error: Por favor, ingresa solo números válidos.");
        return;
    }

    // 3. Verificar si los números son iguales
    if (numero1 === numero2 && numero2 === numero3) {
        console.log("¡Los números son iguales!");
        return;
    }

    // 4. Analizar y ordenar los números
    const numeros = [numero1, numero2, numero3];
    
    // Ordenar de mayor a menor
    numeros.sort((a, b) => b - a);
    const mayor = numeros[0];
    const centro = numeros[1];
    const menor = numeros[2];

    // Imprimir el orden de mayor a menor
    console.log("Números ordenados de mayor a menor:");
    console.log(`Mayor: ${mayor}`);
    console.log(`Centro: ${centro}`);
    console.log(`Menor: ${menor}`);
    console.log(`Orden: ${mayor}, ${centro}, ${menor}`);

    // Ordenar de menor a mayor
    numeros.sort((a, b) => a - b);
    
    // Imprimir el orden de menor a mayor
    console.log("\nNúmeros ordenados de menor a mayor:");
    console.log(`Orden: ${numeros[0]}, ${numeros[1]}, ${numeros[2]}`);
}

// Llamar a la función para ejecutar el código
ordenarNumeros();