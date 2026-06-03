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

//exportamos las funciones 
module.exports.suma = suma;
module.exports.multiplicacion= multiplicacion;
module.exports.validarCorreo= validarCorreo;
module.exports.calDescuento=calDescuento;
module.exports.validacionContraseñas= validacionContraseñas;