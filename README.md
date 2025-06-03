Funcionamiento del archivo .g4 con entrada input.txt

1. Introducción

ANTLR4 es una herramienta utilizada para construir analizadores léxicos y sintácticos a partir de gramáticas definidas en archivos con extensión .g4.

El presente informe tiene como objetivo explicar detalladamente el funcionamiento de un archivo de gramática .g4, tomando como referencia una gramática llamada dsl.g4 y un conjunto de entradas definidas en el archivo input.txt.


2. Estructura General del Archivo .g4


2.1. Declaración de la gramática

-Define el nombre de la gramática como dsl. Esto es necesario para que ANTLR genere los archivos correspondientes (dslLexer, dslParser, etc.).

    grammar dsl;


3. Reglas Sintácticas

-Las reglas sintácticas definen la estructura de alto nivel del lenguaje.

3.1. Regla principal

-Define que un archivo válido debe contener una o más reglas (regla).

    dsl: regla+;


3.2. Definición de una regla

-Una regla sigue esta estructura:

    regla: REGLA IDENTIFICADOR ABRE CUANDO condicion ENTONCES comando CIERRE;


-Cada uno de estos elementos tiene un significado:

.REGLA: palabra clave que inicia la definición.
.IDENTIFICADOR: nombre de la regla (por ejemplo, regla1).
.ABRE, CIERRE: representan { y }.
.CUANDO: palabra clave que introduce la condición.
.ENTONCES: palabra clave que introduce la acción a ejecutar.
.condicion: condición que debe cumplirse.
.comando: acción a ejecutar si la condición es verdadera.

EJ:
    regla <nombre> {
  cuando <condición>
  entonces <comando>
}

.txt
    regla regla1 {
  cuando intentoAccesoFueraHorario
  entonces agregarUsuarioAListaNegra
}


3.3. Reglas para las condiciones

-Una condición puede ser de tres tipos:

.accesoNoAutorizado
.multiplesIntentosFallidos
.actividadSospechosa

    condicion: accesoNoAutorizado | multiplesIntentosFallidos | actividadSospechosa;


3.3.1. accesoNoAutorizado

-Corresponde a la cadena 'intentoAccesoFueraHorario'.

    accesoNoAutorizado: ACCESO_NO_AUTORIZADO;


3.3.2. multiplesIntentosFallidos

-Equivale a condiciones como intentosFallidos > 3, donde:

.INTENTOS_FALLIDOS: 'intentosFallidos'
.MAYOR: '>'
.NUMERO: una o más cifras (DIGITO+)

    multiplesIntentosFallidos: INTENTOS_FALLIDOS MAYOR NUMERO;


3.3.3. actividadSospechosa

    actividadSospechosa: ACCESO_RECURSOS_SENSIBLES CONECTOR NO_ES_ADMINISTRADOR; 

-Representa condiciones compuestas como:

    accesoARecursosSensibles y noEsAdministrador

EJ:

    regla regla3 {
  cuando accesoARecursosSensibles y noEsAdministrador
  entonces agregarIPAListaNegra
}

-donde:

.ACCESO_RECURSOS_SENSIBLES: 'accesoARecursosSensibles'
.CONECTOR: 'y'
.NO_ES_ADMINISTRADOR: 'noEsAdministrador'


3.4. Reglas para comandos

-Los comandos posibles son:

.AGREGAR_USUARIO: 'agregarUsuarioAListaNegra'
.AGREGAR_IP: 'agregarIPaListaNegra'
.ACTIVAR_MONITOREO: 'activarMonitoreoDetallado'

    comando: AGREGAR_USUARIO | AGREGAR_IP | ACTIVAR_MONITOREO;

EJ:

    regla regla2 {
  cuando intentosFallidos > 3
  entonces activarMonitoreoDetallado
}


4. Reglas Léxicas (Tokens)

-Los tokens se definen para identificar palabras clave, símbolos y valores:

    ABRE: '{';
    CIERRE: '}';
    REGLA: 'regla';
    CUANDO: 'cuando';
    ENTONCES: 'entonces';
    MAYOR: '>';
    CONECTOR: 'y';


-Identificadores y números

-Un IDENTIFICADOR empieza con una letra y puede contener letras o dígitos.
-Un NUMERO es una secuencia de uno o más dígitos (DIGITO+).

    IDENTIFICADOR: LETRA (LETRA | DIGITO)*;
    LETRA: [a-zA-Z];
    DIGITO: [0-9];


-Espacios en blanco

-Los espacios, tabulaciones y saltos de línea se ignoran durante el análisis.

    WS: [ \t\r\n]+ -> skip;


5. Análisis del archivo input.txt

El archivo input.txt contiene tres reglas escritas usando la sintaxis del DSL.

EJ:

regla regla1 {
  cuando intentoAccesoFueraHorario
  entonces agregarUsuarioAListaNegra
}

regla regla2 {
  cuando intentosFallidos > 3
  entonces activarMonitoreoDetallado
}

regla regla3 {
  cuando accesoARecursosSensibles y noEsAdministrador
  entonces agregarIPAListaNegra
}


▶Entrada 1

regla regla1 {
  cuando intentoAccesoFueraHorario
  entonces agregarUsuarioAListaNegra
}

-Análisis:

. regla regla1 → REGLA IDENTIFICADOR
. { → ABRE
. cuando intentoAccesoFueraHorario → CUANDO ACCESO_NO_AUTORIZADO
. entonces agregarUsuarioAListaNegra → ENTONCES AGREGAR_USUARIO
. } → CIERRE

Coincide perfectamente con la regla definida en el archivo .g4.


▶Entrada 2

regla regla2 {
  cuando intentosFallidos > 3
  entonces activarMonitoreoDetallado
}

-Análisis:

. intentosFallidos → INTENTOS_FALLIDOS
. > → MAYOR
. 3 → NUMERO
. activarMonitoreoDetallado → ACTIVAR_MONITOREO

Coincide con la subregla multiplesIntentosFallidos.


▶Entrada 3

regla regla3 {
  cuando accesoARecursosSensibles y noEsAdministrador
  entonces agregarIPaListaNegra
}

-Análisis:

. accesoARecursosSensibles → ACCESO_RECURSOS_SENSIBLES
. y → CONECTOR
. noEsAdministrador → NO_ES_ADMINISTRADOR
. agregarIPaListaNegra → AGREGAR_IP

Coincide con la subregla actividadSospechosa.


6. Ejemplos de validación sintáctica

Con el fin de ilustrar el comportamiento de la gramática frente a diferentes entradas, a continuación se presentan cuatro ejemplos representativos.


6.1. Ejemplos válidos

Ejemplo 1

regla regla1 {
  cuando intentoAccesoFueraHorario
  entonces agregarUsuarioAListaNegra
}

regla regla2 {
  cuando intentosFallidos > 3
  entonces activarMonitoreoDetallado
}


Ejemplo 2

regla regla1 {
  cuando accesoARecursosSensibles y noEsAdministrador
  entonces agregarIPAListaNegra
}

regla regla2 {
  cuando intentoAccesoFueraHorario
  entonces activarMonitoreoDetallado
}


6.2. Ejemplos inválidos

Ejemplo 3

regla regla1 {
  cuando accesoFueraHorario
  entonces agregarIPaListaNegra
}

-¿Por qué es inválido?

. "accesoFueraHorario" no está definido como un token válido.
. En la gramática, el acceso no autorizado debe escribirse exactamente como 'intentoAccesoFueraHorario'.
. Resultado: error léxico, ya que ANTLR no puede asociar "accesoFueraHorario" con ningún token válido.


Ejemplo 4

regla regla6 {
  cuando intentosFallidos > 3
  agregarUsuarioAListaNegra
}

-¿Por qué es inválido?

. La estructura está incompleta: falta la palabra clave entonces.
. Resultado: error sintáctico al no encontrar el token ENTONCES.


6.3. Instrucción para el archivo input.txt

Para probar estos ejemplos, deben ser agregados directamente al archivo input.txt, respetando el formato y sintaxis del lenguaje DSL.


7. Conclusión

La gramática definida en dsl.g4 permite describir de manera formal un pequeño lenguaje de reglas condicionales para aplicar comandos ante eventos de seguridad. Gracias a ANTLR4, esta gramática puede utilizarse para generar automáticamente analizadores sintácticos que procesan entradas como las del archivo input.txt.

El diseño modular y claro de las reglas permite extender fácilmente el lenguaje, añadiendo nuevas condiciones o comandos.

