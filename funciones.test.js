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