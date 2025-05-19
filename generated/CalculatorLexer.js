// Generated from c:/Users/paraj/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,47,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,1,1,1,1,2,1,2,1,
3,1,3,1,4,1,4,1,5,4,5,33,8,5,11,5,12,5,34,1,6,1,6,1,7,1,7,1,8,1,8,1,9,3,
9,44,8,9,1,9,1,9,0,0,10,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,1,
0,2,2,0,65,90,97,122,1,0,48,57,48,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,
7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,
0,0,19,1,0,0,0,1,21,1,0,0,0,3,23,1,0,0,0,5,25,1,0,0,0,7,27,1,0,0,0,9,29,
1,0,0,0,11,32,1,0,0,0,13,36,1,0,0,0,15,38,1,0,0,0,17,40,1,0,0,0,19,43,1,
0,0,0,21,22,5,42,0,0,22,2,1,0,0,0,23,24,5,47,0,0,24,4,1,0,0,0,25,26,5,43,
0,0,26,6,1,0,0,0,27,28,5,45,0,0,28,8,1,0,0,0,29,30,5,61,0,0,30,10,1,0,0,
0,31,33,7,0,0,0,32,31,1,0,0,0,33,34,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,
35,12,1,0,0,0,36,37,7,1,0,0,37,14,1,0,0,0,38,39,5,40,0,0,39,16,1,0,0,0,40,
41,5,41,0,0,41,18,1,0,0,0,42,44,5,13,0,0,43,42,1,0,0,0,43,44,1,0,0,0,44,
45,1,0,0,0,45,46,5,10,0,0,46,20,1,0,0,0,3,0,34,43,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalculatorLexer extends antlr4.Lexer {

    static grammarFileName = "Calculator.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'*'", "'/'", "'+'", "'-'", "'='", null, 
                         null, "'('", "')'" ];
	static symbolicNames = [ null, "MUL", "DIV", "ADD", "SUB", "EQ", "ID", 
                          "INT", "LPAREN", "RPAREN", "NEWLINE" ];
	static ruleNames = [ "MUL", "DIV", "ADD", "SUB", "EQ", "ID", "INT", "LPAREN", 
                      "RPAREN", "NEWLINE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CalculatorLexer.EOF = antlr4.Token.EOF;
CalculatorLexer.MUL = 1;
CalculatorLexer.DIV = 2;
CalculatorLexer.ADD = 3;
CalculatorLexer.SUB = 4;
CalculatorLexer.EQ = 5;
CalculatorLexer.ID = 6;
CalculatorLexer.INT = 7;
CalculatorLexer.LPAREN = 8;
CalculatorLexer.RPAREN = 9;
CalculatorLexer.NEWLINE = 10;



