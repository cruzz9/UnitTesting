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

//exportamos las funciones 
module.exports.suma = suma;
module.exports.multiplicacion= multiplicacion;
module.exports.validarCorreo= validarCorreo;