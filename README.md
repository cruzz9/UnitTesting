# 🧪 Pruebas Unitarias con Jest - Funciones JavaScript

## 📖 Descripción del Proyecto

Este proyecto contiene **5 funciones de JavaScript** junto con sus respectivas **pruebas unitarias** desarrolladas con el framework **Jest**. El objetivo es demostrar buenas prácticas en el desarrollo de software mediante la validación automatizada del comportamiento de cada función.

Cada función fue probada considerando:
- ✅ El **camino feliz** (cuando los datos son correctos)
- ⚠️ Los **casos borde** (límites de los valores permitidos)
- ❌ Los **casos de error** (datos inválidos o fuera de rango)

---

## 🛠️ Instalación y Configuración

### Requisitos previos
- Node.js instalado en tu sistema
- npm (viene con Node.js)

### Pasos de instalación

```bash
# 1. Inicializar el proyecto
npm init -y

# 2. Instalar Jest como dependencia de desarrollo
npm install --save-dev jest

# 3. Ejecutar las pruebas
npm test
```

---

## 📚 Documentación de Funciones

### 1️⃣ Función: `calDescuento(precio, porcentaje)`

**📝 Descripción:**  
Calcula el precio final de un producto después de aplicarle un descuento porcentual.

**📥 Parámetros de entrada:**
| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| `precio` | `number` | Precio original del producto (debe ser ≥ 0) |
| `porcentaje` | `number` | Porcentaje de descuento (debe estar entre 0 y 100) |

**📤 Valor de retorno:**  
`number` - El precio final después del descuento.

**⚙️ Fórmula utilizada:**
```
Total = Precio - (Precio × Porcentaje / 100)
```

**🚨 Validaciones:**
- Lanza un error si el porcentaje es menor a 0 o mayor a 100.
- Lanza un error si el precio es negativo.

---

### 2️⃣ Función: `validacionContraseñas(password)`

**📝 Descripción:**  
Verifica si una contraseña cumple con los criterios mínimos de seguridad.

**📥 Parámetros de entrada:**
| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| `password` | `string` | La contraseña a validar |

**📤 Valor de retorno:**  
`boolean` - `true` si es válida, `false` si no lo es.

**🚨 Validaciones (debe cumplir TODAS):**
- ✅ Longitud mínima de 8 caracteres.
- ✅ Debe contener al menos una **letra**.
- ✅ Debe contener al menos un **número**.

---

### 3️⃣ Función: `celsiusAFahrenheit(celsius)`

**📝 Descripción:**  
Convierte una temperatura de grados Celsius a grados Fahrenheit.

**📥 Parámetros de entrada:**
| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| `celsius` | `number` | Temperatura en grados Celsius |

**📤 Valor de retorno:**  
`number` - Temperatura equivalente en grados Fahrenheit.

**⚙️ Fórmula utilizada:**
```
°F = (°C × 9/5) + 32
```

---

### 4️⃣ Función: `esMayorDeEdad(edad)`

**📝 Descripción:**  
Determina si una persona es mayor de edad (18 años o más).

**📥 Parámetros de entrada:**
| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| `edad` | `number` | Edad de la persona (debe ser ≥ 0) |

**📤 Valor de retorno:**  
`boolean` - `true` si es mayor de edad, `false` si es menor.

**🚨 Validaciones:**
- Lanza un error si la edad no es un número.
- Lanza un error si la edad es negativa.

---

### 5️⃣ Función: `generarNombreCompleto(nombre, apellido)`

**📝 Descripción:**  
Une un nombre y un apellido en un solo string con un espacio entre ellos.

**📥 Parámetros de entrada:**
| Parámetro | Tipo | Descripción |
| :--- | :--- | :--- |
| `nombre` | `string` | Nombre de la persona |
| `apellido` | `string` | Apellido de la persona |

**📤 Valor de retorno:**  
`string` - Nombre completo formateado correctamente.

**🚨 Validaciones:**
- Lanza un error si alguno de los parámetros no es un string.
- Elimina espacios accidentales al inicio y final con `.trim()`.

---

## 🧪 Documentación de Pruebas Unitarias

### Pruebas del Ejercicio 1: `calDescuento`

| # | Descripción del Test | Entrada | Resultado Esperado | Matcher Usado |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Descuento del 20% sobre 1000 | `(1000, 20)` | `800` | `.toBe()` |
| 2 | Descuento del 10% sobre 500 | `(500, 10)` | `450` | `.toBe()` |
| 3 | Porcentaje mayor a 100 (inválido) | `(300, 120)` | Error lanzado | `.toThrow()` |
| 4 | Porcentaje negativo (inválido) | `(100, -10)` | Error lanzado | `.toThrow()` |

---

### Pruebas del Ejercicio 2: `validacionContraseñas`

| # | Descripción del Test | Entrada | Resultado Esperado | Matcher Usado |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Contraseña válida con letras y números | `"abc12345"` | `true` | `.toBeTruthy()` |
| 2 | Contraseña muy corta (menos de 8 caracteres) | `"abcdef"` | `false` | `.toBeFalsy()` |
| 3 | Contraseña solo con números (sin letras) | `"12345678"` | `false` | `.toBeFalsy()` |
| 4 | Contraseña solo con letras (sin números) | `"abcdefgh"` | `false` | `.toBeFalsy()` |

---

### Pruebas del Ejercicio 3: `celsiusAFahrenheit`

| # | Descripción del Test | Entrada | Resultado Esperado | Matcher Usado |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Punto de congelación del agua | `0` | `32` | `.toBe()` |
| 2 | Temperatura ambiente | `25` | `77` | `.toBe()` |
| 3 | Temperatura bajo cero | `-10` | `14` | `.toBe()` |
| 4 | Punto de ebullición del agua | `100` | `212` | `.toBe()` |

---

### Pruebas del Ejercicio 4: `esMayorDeEdad`

| # | Descripción del Test | Entrada | Resultado Esperado | Matcher Usado |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Exactamente 18 años (límite) | `18` | `true` | `.toBeTruthy()` |
| 2 | Edad mayor a 18 | `25` | `true` | `.toBeTruthy()` |
| 3 | Menor de edad | `16` | `false` | `.toBeFalsy()` |
| 4 | Edad negativa (inválida) | `-5` | Error lanzado | `.toThrow()` |

---

### Pruebas del Ejercicio 5: `generarNombreCompleto`

| # | Descripción del Test | Entrada | Resultado Esperado | Matcher Usado |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Nombre y apellido normales | `("Ana", "Martínez")` | `"Ana Martínez"` | `.toBe()` |
| 2 | Espacios extras al inicio y final | `("  Luis ", " Ramírez ")` | `"Luis Ramírez"` | `.toBe()` |
| 3 | Parámetros no string (inválido) | `(123, "Pérez")` | Error lanzado | `.toThrow()` |

---

## 🐛 Problemas Encontrados Durante el Desarrollo

### Problema 1: Bloque `if` vacío en `calDescuento`
**❌ Error:**  
El código original tenía un `if (porcentaje < 0 || porcentaje > 100)` sin ninguna acción dentro.

**✅ Solución:**  
Se agregó `throw new Error("El porcentaje debe estar entre 0 y 100")` para lanzar una excepción controlada.

---

### Problema 2: Nombre de función incorrecto
**❌ Error:**  
Los `console.log` llamaban a `calcularDescuento()`, pero la función se llamaba `calDescuento()`.

**✅ Solución:**  
Se unificó el nombre de la función y sus llamadas.

---

### Problema 3: Validación incompleta en `validacionContraseñas`
**❌ Error:**  
La función solo verificaba que hubiera un número y 8 caracteres, pero no validaba la presencia de letras.

**✅ Solución:**  
Se agregó la expresión regular `/[a-zA-Z]/.test(password)` para validar la presencia de al menos una letra.

---

### Problema 4: Variable global innecesaria en `celsiusAFahrenheit`
**❌ Error:**  
El código usaba `return Fahrenheit = (...)`, lo que creaba una variable global innecesaria.

**✅ Solución:**  
Se retornó directamente la expresión matemática sin asignación.

---

### Problema 5: Lógica redundante en `esMayorDeEdad`
**❌ Error:**  
La función usaba un `if/else` para retornar `true` o `false`, cuando la comparación ya devuelve un booleano.

**✅ Solución:**  
Se simplificó a `return edad >= 18;`.

---

### Problema 6: Pruebas con errores lógicos
**❌ Error:**  
- El test de `calDescuento(300, 120)` usaba `.toBeTruthy()` cuando debería esperar un error.
- El test de `validacionContraseñas("12345678")` esperaba `true` cuando debería ser `false` (no tiene letras).

**✅ Solución:**  
Se corrigieron los matchers a `.toThrow()` y `.toBeFalsy()` respectivamente.

---

## 🤖 Uso Recomendado de IA para Documentación

La Inteligencia Artificial puede acelerar significativamente la creación de documentación técnica, pero debe usarse de forma estratégica.

### ✅ Mini Guía para Usar IA Correctamente

#### 1. Explica claramente el contexto

Antes de pedir ayuda, proporciona información sobre:
- Tu nivel de experiencia
- El objetivo del proyecto
- El público al que va dirigido

**Ejemplo de prompt efectivo:**
> "Estoy desarrollando pruebas unitarias básicas con Jest para funciones de JavaScript. Necesito documentación técnica simple y clara para estudiantes principiantes."

#### 2. Proporciona toda la información necesaria

Comparte siempre:
- ✅ El código de la función.
- ✅ El código de la prueba.
- ✅ El resultado esperado.
- ✅ Cualquier error que estés viendo.

#### 3. Solicita explicaciones específicas

Evita preguntas vagas como "¿qué hace esto?". En su lugar, pide cosas concretas:

| ❌ Prompt Vago | ✅ Prompt Efectivo |
| :--- | :--- |
| "Explícame este código" | "Explica qué valida esta prueba unitaria paso a paso" |
| "Ayúdame con las pruebas" | "Genera una tabla con casos de prueba y resultados esperados para esta función" |
| "¿Está bien mi código?" | "Resume el propósito de esta función en lenguaje sencillo y señala posibles errores" |

### 🎯 Casos de Uso Recomendados de IA

1. **Generación de documentación inicial**: Pedir a la IA que explique qué hace cada función.
2. **Detección de errores**: Compartir el código y pedir que identifique problemas.
3. **Creación de casos de prueba**: Solicitar casos borde que no habías considerado.
4. **Mejora de legibilidad**: Pedir que simplifique código redundante.
5. **Traducción técnica**: Convertir explicaciones complejas a lenguaje sencillo.

### ⚠️ Precauciones al Usar IA

- **Siempre verifica** las respuestas de la IA, especialmente en lógica de negocio.
- **No copies ciegamente**: Entiende cada sugerencia antes de implementarla.
- **La IA puede equivocarse**: Revisa que los valores esperados en las pruebas sean matemáticamente correctos.
- **Contexto es clave**: Mientras más información le des, mejores respuestas obtendrás.

---

## 📊 Resumen General del Proyecto

| Función | Propósito | Nº de Pruebas | Estado |
| :--- | :--- | :--- | :--- |
| `calDescuento` | Calcular precio con descuento | 4 | ✅ Completado |
| `validacionContraseñas` | Validar seguridad de contraseña | 4 | ✅ Completado |
| `celsiusAFahrenheit` | Conversión de temperatura | 4 | ✅ Completado |
| `esMayorDeEdad` | Verificar mayoría de edad | 4 | ✅ Completado |
| `generarNombreCompleto` | Unir nombre y apellido | 3 | ✅ Completado |

**Total de pruebas unitarias:** 19  
**Cobertura de casos:** Camino feliz, casos borde y casos de error.

---

## 🚀 Conclusión

Este proyecto demuestra la importancia de:
1. **Validar las entradas** de las funciones para evitar comportamientos inesperados.
2. **Probar todos los escenarios**, no solo el camino feliz.
3. **Documentar el código** para facilitar el mantenimiento.
4. **Usar herramientas como Jest** para automatizar las pruebas.
5. **Aprovechar la IA de forma inteligente** para acelerar procesos repetitivos como la documentación.

---

## 📝 Autor

Proyecto desarrollado como ejercicio de aprendizaje en pruebas unitarias con Jest.

**Fecha:** Junio 2026