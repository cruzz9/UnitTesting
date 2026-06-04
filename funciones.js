function suma(a,b){
    return a+b;
}
function multiplicacion(x,y){
    return x*y;
}
function validarCorreo(correo) {
    const regex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    if (!(correo.match(regex))) {
        return false;
    }
    return true;
}//funcion para validar el correo 

//EJERCICIO UNO
function calDescuento(precio,porcentaje){
    if (porcentaje < 0 || porcentaje > 100) {
    }
    let descuento= precio * (porcentaje / 100);
    let total= precio-descuento;
    return  total;
}
console.log(calcularDescuento(1000, 20));
console.log(calcularDescuento(500, 10));
console.log(calcularDescuento(300, 120));

//EJERCICIO DOS
function validacionContraseñas(password){
    const tieneNumero = /\d/.test(password);
    const validacion = password.length >= 8;
     if ( validacion && tieneNumero) {
        console.log(" La contraseña es válida");
        return true; // Es buena práctica devolver true/false para usarlo en otras partes del código
    } else {
        console.log(" La contraseña NO es válida. Debe tener al menos 8 caracteres, una letra y un número.");
        return false;
    }
}
console.log(validarPassword("abc12345"));
console.log(validarPassword("abcdef"));
console.log(validarPassword("12345678"));


//Ejercicio 3 — Conversor de temperatura
function celsiusAFahrenheit(celsius){
    return Fahrenheit = (celsius * 9/5) + 32;
}
console.log(celsiusAFahrenheit(0));
console.log(celsiusAFahrenheit(25));
console.log(celsiusAFahrenheit(-10));

//Ejercicio 4 — Verificador de mayoría de edad
function esMayorDeEdad(edad){
    if( edad >= 18){
    return true;
    }
    return false;
}
console.log(esMayorDeEdad(18));
console.log(esMayorDeEdad(25));
console.log(esMayorDeEdad(16));


//Ejercicio 5 — Generador de nombre completo
function generarNombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`;
}
console.log(generarNombreCompleto("Ana", "Martínez"));   // "Ana Martínez"
console.log(generarNombreCompleto("Luis", "Ramírez"));   // "Luis Ramírez"
///////////////////////////////////////////////////////////


//exportamos las funciones 
module.exports.suma = suma;
module.exports.multiplicacion= multiplicacion;
module.exports.validarCorreo= validarCorreo;
module.exports.calDescuento=calDescuento;
module.exports.validacionContraseñas= validacionContraseñas;
module.exports.celsiusAFahrenheit =celsiusAFahrenheit;
module.exports.esMayorDeEdad=esMayorDeEdad;