// Generated from c:/Users/paraj/ssl-antlr-calculator/metadata.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import metadataListener from './metadataListener.js';
import metadataVisitor from './metadataVisitor.js';

const serializedATN = [4,1,20,59,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,3,3,38,8,3,1,4,1,4,1,5,1,5,1,
6,1,6,1,7,1,7,1,7,1,7,5,7,50,8,7,10,7,12,7,53,9,7,1,7,1,7,1,8,1,8,1,8,0,
0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,2,9,54,0,21,1,0,0,0,2,26,1,0,0,0,4,31,
1,0,0,0,6,37,1,0,0,0,8,39,1,0,0,0,10,41,1,0,0,0,12,43,1,0,0,0,14,45,1,0,
0,0,16,56,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,
0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,25,5,0,0,1,25,1,1,0,0,0,26,
27,3,4,2,0,27,28,5,1,0,0,28,29,3,6,3,0,29,30,3,16,8,0,30,3,1,0,0,0,31,32,
7,0,0,0,32,5,1,0,0,0,33,38,3,8,4,0,34,38,3,10,5,0,35,38,3,12,6,0,36,38,3,
14,7,0,37,33,1,0,0,0,37,34,1,0,0,0,37,35,1,0,0,0,37,36,1,0,0,0,38,7,1,0,
0,0,39,40,5,14,0,0,40,9,1,0,0,0,41,42,5,15,0,0,42,11,1,0,0,0,43,44,5,16,
0,0,44,13,1,0,0,0,45,46,5,10,0,0,46,51,3,8,4,0,47,48,5,11,0,0,48,50,3,8,
4,0,49,47,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,
0,53,51,1,0,0,0,54,55,5,12,0,0,55,15,1,0,0,0,56,57,5,13,0,0,57,17,1,0,0,
0,3,21,37,51];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class metadataParser extends antlr4.Parser {

    static grammarFileName = "metadata.g4";
    static literalNames = [ null, "':'", "'nombre'", "'tipo'", "'tama\\u00C3\\u00B1o'", 
                            "'creado'", "'modificado'", "'autor'", "'descripcion'", 
                            "'etiquetas'", "'['", "','", "']'", "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "TEXTO", 
                             "NUMERO", "FECHA", "CARACTER", "LETRA", "DIGITO", 
                             "WS" ];
    static ruleNames = [ "metadata", "campo", "nombreCampo", "valorCampo", 
                         "texto", "numero", "fecha", "listaTextos", "finCampo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = metadataParser.ruleNames;
        this.literalNames = metadataParser.literalNames;
        this.symbolicNames = metadataParser.symbolicNames;
    }



	metadata() {
	    let localctx = new MetadataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, metadataParser.RULE_metadata);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1020) !== 0)) {
	            this.state = 18;
	            this.campo();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(metadataParser.EOF);
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



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, metadataParser.RULE_campo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.nombreCampo();
	        this.state = 27;
	        this.match(metadataParser.T__0);
	        this.state = 28;
	        this.valorCampo();
	        this.state = 29;
	        this.finCampo();
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



	nombreCampo() {
	    let localctx = new NombreCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, metadataParser.RULE_nombreCampo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1020) !== 0))) {
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



	valorCampo() {
	    let localctx = new ValorCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, metadataParser.RULE_valorCampo);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.texto();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.numero();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.fecha();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 36;
	            this.listaTextos();
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



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, metadataParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(metadataParser.TEXTO);
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



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, metadataParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(metadataParser.NUMERO);
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



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, metadataParser.RULE_fecha);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(metadataParser.FECHA);
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



	listaTextos() {
	    let localctx = new ListaTextosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, metadataParser.RULE_listaTextos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(metadataParser.T__9);
	        this.state = 46;
	        this.texto();
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 47;
	            this.match(metadataParser.T__10);
	            this.state = 48;
	            this.texto();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(metadataParser.T__11);
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



	finCampo() {
	    let localctx = new FinCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, metadataParser.RULE_finCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(metadataParser.T__12);
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

metadataParser.EOF = antlr4.Token.EOF;
metadataParser.T__0 = 1;
metadataParser.T__1 = 2;
metadataParser.T__2 = 3;
metadataParser.T__3 = 4;
metadataParser.T__4 = 5;
metadataParser.T__5 = 6;
metadataParser.T__6 = 7;
metadataParser.T__7 = 8;
metadataParser.T__8 = 9;
metadataParser.T__9 = 10;
metadataParser.T__10 = 11;
metadataParser.T__11 = 12;
metadataParser.T__12 = 13;
metadataParser.TEXTO = 14;
metadataParser.NUMERO = 15;
metadataParser.FECHA = 16;
metadataParser.CARACTER = 17;
metadataParser.LETRA = 18;
metadataParser.DIGITO = 19;
metadataParser.WS = 20;

metadataParser.RULE_metadata = 0;
metadataParser.RULE_campo = 1;
metadataParser.RULE_nombreCampo = 2;
metadataParser.RULE_valorCampo = 3;
metadataParser.RULE_texto = 4;
metadataParser.RULE_numero = 5;
metadataParser.RULE_fecha = 6;
metadataParser.RULE_listaTextos = 7;
metadataParser.RULE_finCampo = 8;

class MetadataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metadataParser.RULE_metadata;
    }

	EOF() {
	    return this.getToken(metadataParser.EOF, 0);
	};

	campo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CampoContext);
	    } else {
	        return this.getTypedRuleContext(CampoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.enterMetadata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.exitMetadata(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof metadataVisitor ) {
	        return visitor.visitMetadata(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metadataParser.RULE_campo;
    }

	nombreCampo() {
	    return this.getTypedRuleContext(NombreCampoContext,0);
	};

	valorCampo() {
	    return this.getTypedRuleContext(ValorCampoContext,0);
	};

	finCampo() {
	    return this.getTypedRuleContext(FinCampoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof metadataVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metadataParser.RULE_nombreCampo;
    }


	enterRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.enterNombreCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.exitNombreCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof metadataVisitor ) {
	        return visitor.visitNombreCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metadataParser.RULE_valorCampo;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	listaTextos() {
	    return this.getTypedRuleContext(ListaTextosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.enterValorCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.exitValorCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof metadataVisitor ) {
	        return visitor.visitValorCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metadataParser.RULE_texto;
    }

	TEXTO() {
	    return this.getToken(metadataParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof metadataVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metadataParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(metadataParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof metadataVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metadataParser.RULE_fecha;
    }

	FECHA() {
	    return this.getToken(metadataParser.FECHA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.exitFecha(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof metadataVisitor ) {
	        return visitor.visitFecha(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaTextosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metadataParser.RULE_listaTextos;
    }

	texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextoContext);
	    } else {
	        return this.getTypedRuleContext(TextoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.enterListaTextos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.exitListaTextos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof metadataVisitor ) {
	        return visitor.visitListaTextos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FinCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metadataParser.RULE_finCampo;
    }


	enterRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.enterFinCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metadataListener ) {
	        listener.exitFinCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof metadataVisitor ) {
	        return visitor.visitFinCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




metadataParser.MetadataContext = MetadataContext; 
metadataParser.CampoContext = CampoContext; 
metadataParser.NombreCampoContext = NombreCampoContext; 
metadataParser.ValorCampoContext = ValorCampoContext; 
metadataParser.TextoContext = TextoContext; 
metadataParser.NumeroContext = NumeroContext; 
metadataParser.FechaContext = FechaContext; 
metadataParser.ListaTextosContext = ListaTextosContext; 
metadataParser.FinCampoContext = FinCampoContext; 
