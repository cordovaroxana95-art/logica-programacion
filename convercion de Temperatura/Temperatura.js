/*Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
*Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
*Debe imprimir ambos resultados por consola o por el DOM.
*Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso
contrario debe mandar un mensaje de error y volver a solicitar los datos.
*/

function convertirYMostrar() {
            // Obtener el valor de la caja de texto
            const inputCelsius = document.getElementById('celsius');
            let temperaturaCelsius = parseFloat(inputCelsius.value);

            // Validar si el valor es un número válido
            if (isNaN(temperaturaCelsius)) {
                alert("Por favor, ingrese un número válido en grados Celsius.");
                return; // Detener la ejecución si no es un número
            }

            // Calcular las conversiones
            const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
            const temperaturaKelvin = temperaturaCelsius + 273.15;

            // Mostrar los resultados en la página
            document.getElementById('fahrenheit').textContent = temperaturaFahrenheit.toFixed(2);
            document.getElementById('kelvin').textContent = temperaturaKelvin.toFixed(2);
        }

