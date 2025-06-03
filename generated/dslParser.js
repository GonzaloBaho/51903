// Generated from c:/Users/paraj/ssl-antlr-calculator/dsl.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import dslListener from './dslListener.js';
import dslVisitor from './dslVisitor.js';

const serializedATN = [4,1,19,46,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,2,1,2,1,2,3,2,32,8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,
6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,6,8,41,0,15,1,0,0,0,2,19,1,0,0,0,
4,31,1,0,0,0,6,33,1,0,0,0,8,35,1,0,0,0,10,39,1,0,0,0,12,43,1,0,0,0,14,16,
3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,1,1,0,
0,0,19,20,5,11,0,0,20,21,5,16,0,0,21,22,5,9,0,0,22,23,5,12,0,0,23,24,3,4,
2,0,24,25,5,13,0,0,25,26,3,12,6,0,26,27,5,10,0,0,27,3,1,0,0,0,28,32,3,6,
3,0,29,32,3,8,4,0,30,32,3,10,5,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,
0,32,5,1,0,0,0,33,34,5,2,0,0,34,7,1,0,0,0,35,36,5,3,0,0,36,37,5,14,0,0,37,
38,5,1,0,0,38,9,1,0,0,0,39,40,5,4,0,0,40,41,5,15,0,0,41,42,5,5,0,0,42,11,
1,0,0,0,43,44,7,0,0,0,44,13,1,0,0,0,2,17,31];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class dslParser extends antlr4.Parser {

    static grammarFileName = "dsl.g4";
    static literalNames = [ null, null, "'intentoAccesoFueraHorario'", "'intentosFallidos'", 
                            "'accesoARecursosSensibles'", "'noEsAdministrador'", 
                            "'agregarUsuarioAListaNegra'", "'agregarIPAListaNegra'", 
                            "'activarMonitoreoDetallado'", "'{'", "'}'", 
                            "'regla'", "'cuando'", "'entonces'", "'>'", 
                            "'y'" ];
    static symbolicNames = [ null, "NUMERO", "ACCESO_NO_AUTORIZADO", "INTENTOS_FALLIDOS", 
                             "ACCESO_RECURSOS_SENSIBLES", "NO_ES_ADMINISTRADOR", 
                             "AGREGAR_USUARIO", "AGREGAR_IP", "ACTIVAR_MONITOREO", 
                             "ABRE", "CIERRE", "REGLA", "CUANDO", "ENTONCES", 
                             "MAYOR", "CONECTOR", "IDENTIFICADOR", "LETRA", 
                             "DIGITO", "WS" ];
    static ruleNames = [ "dsl", "regla", "condicion", "accesoNoAutorizado", 
                         "multiplesIntentosFallidos", "actividadSospechosa", 
                         "comando" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = dslParser.ruleNames;
        this.literalNames = dslParser.literalNames;
        this.symbolicNames = dslParser.symbolicNames;
    }



	dsl() {
	    let localctx = new DslContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, dslParser.RULE_dsl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.regla();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, dslParser.RULE_regla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(dslParser.REGLA);
	        this.state = 20;
	        this.match(dslParser.IDENTIFICADOR);
	        this.state = 21;
	        this.match(dslParser.ABRE);
	        this.state = 22;
	        this.match(dslParser.CUANDO);
	        this.state = 23;
	        this.condicion();
	        this.state = 24;
	        this.match(dslParser.ENTONCES);
	        this.state = 25;
	        this.comando();
	        this.state = 26;
	        this.match(dslParser.CIERRE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, dslParser.RULE_condicion);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.accesoNoAutorizado();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.multiplesIntentosFallidos();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.actividadSospechosa();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accesoNoAutorizado() {
	    let localctx = new AccesoNoAutorizadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, dslParser.RULE_accesoNoAutorizado);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(dslParser.ACCESO_NO_AUTORIZADO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplesIntentosFallidos() {
	    let localctx = new MultiplesIntentosFallidosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, dslParser.RULE_multiplesIntentosFallidos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(dslParser.INTENTOS_FALLIDOS);
	        this.state = 36;
	        this.match(dslParser.MAYOR);
	        this.state = 37;
	        this.match(dslParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actividadSospechosa() {
	    let localctx = new ActividadSospechosaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, dslParser.RULE_actividadSospechosa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(dslParser.ACCESO_RECURSOS_SENSIBLES);
	        this.state = 40;
	        this.match(dslParser.CONECTOR);
	        this.state = 41;
	        this.match(dslParser.NO_ES_ADMINISTRADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, dslParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

dslParser.EOF = antlr4.Token.EOF;
dslParser.NUMERO = 1;
dslParser.ACCESO_NO_AUTORIZADO = 2;
dslParser.INTENTOS_FALLIDOS = 3;
dslParser.ACCESO_RECURSOS_SENSIBLES = 4;
dslParser.NO_ES_ADMINISTRADOR = 5;
dslParser.AGREGAR_USUARIO = 6;
dslParser.AGREGAR_IP = 7;
dslParser.ACTIVAR_MONITOREO = 8;
dslParser.ABRE = 9;
dslParser.CIERRE = 10;
dslParser.REGLA = 11;
dslParser.CUANDO = 12;
dslParser.ENTONCES = 13;
dslParser.MAYOR = 14;
dslParser.CONECTOR = 15;
dslParser.IDENTIFICADOR = 16;
dslParser.LETRA = 17;
dslParser.DIGITO = 18;
dslParser.WS = 19;

dslParser.RULE_dsl = 0;
dslParser.RULE_regla = 1;
dslParser.RULE_condicion = 2;
dslParser.RULE_accesoNoAutorizado = 3;
dslParser.RULE_multiplesIntentosFallidos = 4;
dslParser.RULE_actividadSospechosa = 5;
dslParser.RULE_comando = 6;

class DslContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dslParser.RULE_dsl;
    }

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.enterDsl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.exitDsl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dslVisitor ) {
	        return visitor.visitDsl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dslParser.RULE_regla;
    }

	REGLA() {
	    return this.getToken(dslParser.REGLA, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(dslParser.IDENTIFICADOR, 0);
	};

	ABRE() {
	    return this.getToken(dslParser.ABRE, 0);
	};

	CUANDO() {
	    return this.getToken(dslParser.CUANDO, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(dslParser.ENTONCES, 0);
	};

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	CIERRE() {
	    return this.getToken(dslParser.CIERRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.enterRegla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.exitRegla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dslVisitor ) {
	        return visitor.visitRegla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dslParser.RULE_condicion;
    }

	accesoNoAutorizado() {
	    return this.getTypedRuleContext(AccesoNoAutorizadoContext,0);
	};

	multiplesIntentosFallidos() {
	    return this.getTypedRuleContext(MultiplesIntentosFallidosContext,0);
	};

	actividadSospechosa() {
	    return this.getTypedRuleContext(ActividadSospechosaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dslVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccesoNoAutorizadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dslParser.RULE_accesoNoAutorizado;
    }

	ACCESO_NO_AUTORIZADO() {
	    return this.getToken(dslParser.ACCESO_NO_AUTORIZADO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.enterAccesoNoAutorizado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.exitAccesoNoAutorizado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dslVisitor ) {
	        return visitor.visitAccesoNoAutorizado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplesIntentosFallidosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dslParser.RULE_multiplesIntentosFallidos;
    }

	INTENTOS_FALLIDOS() {
	    return this.getToken(dslParser.INTENTOS_FALLIDOS, 0);
	};

	MAYOR() {
	    return this.getToken(dslParser.MAYOR, 0);
	};

	NUMERO() {
	    return this.getToken(dslParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.enterMultiplesIntentosFallidos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.exitMultiplesIntentosFallidos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dslVisitor ) {
	        return visitor.visitMultiplesIntentosFallidos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActividadSospechosaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dslParser.RULE_actividadSospechosa;
    }

	ACCESO_RECURSOS_SENSIBLES() {
	    return this.getToken(dslParser.ACCESO_RECURSOS_SENSIBLES, 0);
	};

	CONECTOR() {
	    return this.getToken(dslParser.CONECTOR, 0);
	};

	NO_ES_ADMINISTRADOR() {
	    return this.getToken(dslParser.NO_ES_ADMINISTRADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.enterActividadSospechosa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.exitActividadSospechosa(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dslVisitor ) {
	        return visitor.visitActividadSospechosa(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dslParser.RULE_comando;
    }

	AGREGAR_USUARIO() {
	    return this.getToken(dslParser.AGREGAR_USUARIO, 0);
	};

	AGREGAR_IP() {
	    return this.getToken(dslParser.AGREGAR_IP, 0);
	};

	ACTIVAR_MONITOREO() {
	    return this.getToken(dslParser.ACTIVAR_MONITOREO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dslListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dslVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




dslParser.DslContext = DslContext; 
dslParser.ReglaContext = ReglaContext; 
dslParser.CondicionContext = CondicionContext; 
dslParser.AccesoNoAutorizadoContext = AccesoNoAutorizadoContext; 
dslParser.MultiplesIntentosFallidosContext = MultiplesIntentosFallidosContext; 
dslParser.ActividadSospechosaContext = ActividadSospechosaContext; 
dslParser.ComandoContext = ComandoContext; 
