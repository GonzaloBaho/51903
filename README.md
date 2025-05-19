ANALIZADOR

1. Introducción

Este informe tiene como objetivo describir detalladamente la gramática denominada SimpleLang, escrita en ANTLR. Esta gramática permite definir estructuras de datos con campos etiquetados, orientada a procesar y validar entradas tipo metadatos o registros formateados con claves y valores.


2. Definición General de la Gramática

-La palabra clave grammar define el nombre de la gramática, en este caso SimpleLang.

  grammar SimpleLang;


3. Reglas de Producción Principales

-"megadate" representa la estructura principal del lenguaje.

-Está compuesta por uno o más "campos", indicando que el bloque puede contener múltiples líneas de datos etiquetados.

  megadate: campo+;


-Define un campo individual compuesto por tres partes:

."nombrecampo": clave del campo (ej. nombre, tipo).
." ':' ": separador obligatorio entre clave y valor.
."valorcampo": valor asociado al campo.
."fincampo": marca el final del campo con un punto y coma ";".

  campo: nombrecampo ':' valorcampo fincampo;


-Especifica los únicos nombres de campos válidos para la gramática.

  nombrecampo: 'nombre' | 'tipo' | 'tamano' | 'creado' | 'modificado' | 'autor'| 'descripcion' | 'etiquetas';


-El valor de un campo puede ser:

.Un texto (texto)
.Un número (numero)
.Una fecha (fecha)
.Una lista de textos separados por comas (listatexto)

  valorcampo: texto | numero | fecha | listatexto;

4. Reglas para Tipos de Datos

-Texto
Define un texto como una o más apariciones de caracteres válidos.

  texto: (caracter)+;

-Número
Define un número como una secuencia de uno o más dígitos.

  numero: (DIGITO)+;


-Fecha
Formato completo de fecha: AAAA-MM-DD HH:MM.

  fecha: anio '-' mes '-' dia ' ' hora ':' minutos;

-Desglosado en:

.anio: cuatro dígitos
.mes, dia, hora, minutos: dos dígitos cada uno


-Lista de textos
Define una lista de textos separados por comas.

  listatexto: texto (',' texto)*;


5. Reglas de Caracteres Válidos

-Un carácter válido puede ser:
.Letra (mayúscula o minúscula)
.Dígito
.Barra baja "_"
.Punto "."
.Coma ","

  caracter: LETRA | DIGITO | BAJO | PUNTO | COMA;


6. Tokens Léxicos y Constantes

-Tokens que representan etiquetas utilizadas como claves.

  NOMBRE: 'nombre';
  TIPO: 'tipo';
  TAMANO: 'tamano';
  CREADO: 'creado';
  MODIFICADO: 'modificado';
  AUTOR: 'autor';
  DESCRIPCION: 'descripcion';
  ETIQUETAS: 'etiquetas';

-Definen la estructura interna de los campos de fecha.

  anio: DIGITO DIGITO DIGITO DIGITO;
  mes: DIGITO DIGITO;
  ia: DIGITO DIGITO;
  hora: DIGITO DIGITO;
  minutos: DIGITO DIGITO;


Símbolos

-Tokens para representar símbolos utilizados en los datos.

  TEX: 'texto';
  BARRA: '-';
  PUNTO: '.';
  BAJO: '_';
  VACIO: ' ';
  COMA: ',';
  DOSPUNTOS: ':';
  PUNTOCOMA: ';';
  fincampo: ';';


7. Definiciones Básicas de Caracteres

-Letras: cualquier letra del alfabeto.

  LETRA: [a-zA-Z];

-Dígitos: del 0 al 9.

  DIGITO: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';


8. Espacios en Blanco

-Espacios en blanco, tabulaciones y saltos de línea se ignoran durante el análisis.

  WS: [ \t\r\n]+ -> skip;


9. Conclusión

La gramática SimpleLang es una especificación formal diseñada para reconocer entradas compuestas por campos etiquetados. Define de forma clara los nombres de campos válidos, sus tipos de datos y la estructura sintáctica esperada. Esta gramática puede ser útil en contextos donde se requiera la validación y el análisis de metadatos o configuraciones estructuradas, utilizando herramientas como ANTLR para generar analizadores léxicos y sintácticos automáticos.


Ejemplo Práctico: Archivo input1.txt

A continuación se muestra un ejemplo de entrada válida que cumple con la gramática SimpleLang.

input1.txt:

nombre:archivo.txt;
tipo:texto;
creado:Usuario123;
modificado:2025-05-15 10:00;
autor:Usuario123;
descripcion:Este es un archivo de prueba para demostrar el formato de metadatos.;
etiquetas:prueba,ejemplo,metadata;


Análisis por Campo

Campo	          Valor	                       Tipo Reconocido
nombre	          archivo.txt	               texto
tipo	          texto	                       texto (literal fijo)
creado	          Usuario123	               texto
modificado	      2025-05-15 10:00	           fecha
autor	          Usuario123	               texto
descripcion	      Este es un archivo de        texto largo
                  prueba para demostrar 
                  el formato...	texto largo
etiquetas	      prueba,ejemplo,metadata	   listatexto