grammar dsl;

dsl: regla+;

regla: REGLA IDENTIFICADOR ABRE CUANDO condicion ENTONCES comando CIERRE;

condicion:accesoNoAutorizado|multiplesIntentosFallidos|actividadSospechosa;

accesoNoAutorizado: ACCESO_NO_AUTORIZADO;
multiplesIntentosFallidos: INTENTOS_FALLIDOS MAYOR NUMERO;
actividadSospechosa: ACCESO_RECURSOS_SENSIBLES CONECTOR NO_ES_ADMINISTRADOR;

comando:AGREGAR_USUARIO|AGREGAR_IP|ACTIVAR_MONITOREO;

NUMERO: DIGITO+;

ACCESO_NO_AUTORIZADO: 'intentoAccesoFueraHorario';
INTENTOS_FALLIDOS: 'intentosFallidos';
ACCESO_RECURSOS_SENSIBLES: 'accesoARecursosSensibles';
NO_ES_ADMINISTRADOR: 'noEsAdministrador';

AGREGAR_USUARIO: 'agregarUsuarioAListaNegra';
AGREGAR_IP: 'agregarIPAListaNegra';
ACTIVAR_MONITOREO: 'activarMonitoreoDetallado';

ABRE: '{';
CIERRE: '}';
REGLA: 'regla';
CUANDO: 'cuando';
ENTONCES: 'entonces';
MAYOR: '>';
CONECTOR: 'y';

IDENTIFICADOR: LETRA (LETRA | DIGITO)*;

LETRA: [a-zA-Z];
DIGITO: [0-9];

WS: [ \t\r\n]+ -> skip;
