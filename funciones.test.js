const funciones = require("./funciones");//importamos el archivo funciones.js
test("Sumar 2 + 2 es igual a 4",()=>{
    expect(funciones.suma(2,2)).toBe(4);
});

test("Sumar 0 + 0 es igual a 0",()=>{
    expect(funciones.suma(0,0)).toBe(0);
});

test("Sumar 7 + 5 es igual a 12",()=>{
    expect(funciones.suma(7,5)).toBe(12);
});

test("El correo feraguilar@gmail.com tiene un formato valido", ()=>{
    expect(funciones.validarCorreo("feraguilargmail.com")).toBeFalsy();
});
test("El correo feraguilar@gmail.com tiene un formato valido", ()=>{
    expect(funciones.validarCorreo("feraguilar@gmail.com")).toBeTruthy();
});

//EJERCICIO UNO 

test("El descuento de 1000 por el porcentaje de 20 debe ser igual a 800",()=>{
    expect(funciones.calDescuento(1000,20)).toBe(800);
});

test("El descuento de 500 por el porcentaje de 10 debe ser igual a 450",()=>{
    expect(funciones.calDescuento(500,10)).toBe(450);
});

test("El descuento de 300 por el porcentaje de 120 debe ser invalido",()=>{
    expect(funciones.calDescuento(300,120)).toBeTruthy();
});

//EJRCICIO DOS 
test("La contraseña es validad contiene letras y numeros",()=>{
    expect(funciones.validacionContraseñas("abc12345")).toBeTruthy();
});

test("La contraseña no es validad contiene letras y numeros",()=>{
    expect(funciones.validacionContraseñas("abcdef")).toBeFalsy();
});

test("La contraseña es validad contiene numeros",()=>{
    expect(funciones.validacionContraseñas("12345678")).toBeTruthy();
});