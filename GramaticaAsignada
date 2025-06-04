<DSL> ::= <Regla>+ 

<Regla> ::= "regla" <Identificador> "{" "cuando" <Condicion> "entonces" <Comando> "}"

<Condicion> ::= <AccesoNoAutorizado> | <MultiplesIntentosFallidos> | <ActividadSospechosa>

<AccesoNoAutorizado> ::= "intentoAccesoFueraHorario"

<MultiplesIntentosFallidos> ::= "intentosFallidos" ">" <Digito>

<ActividadSospechosa> ::= "accesoARecursosSensibles" "y" "noEsAdministrador"

<Comando> ::= "agregarUsuarioAListaNegra" | "agregarIPAListaNegra" | "activarMonitoreoDetallado"

<Identificador> ::= <Letra> (<Letra> | <Digito>)*

<Cadena> ::= <Caracter>+

<Letra> ::= "A" | "B" | "C" | ... | "Z" | "a" | "b" | "c" | ... | "z"

<Digito> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

<Caracter> ::= <Letra> | <Digito> | "_" | "-" | "." | "/"
