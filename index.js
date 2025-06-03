import dslLexer from "./generated/dslLexer.js";
import dslParser from "./generated/dslParser.js";
import CustomDSLVisitor from "./CustomDSLVisitor.js";
import { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";
import readline from "readline";

async function main() {
  let input;

  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    input = await leerCadena(); // Simula lectura síncrona
    console.log(input);
  }

  // Crear el lexer y el analizador para obtener el lexer
  const chars = CharStreams.fromString(input);
  const lexer = new dslLexer(chars);

  // Verificar si el lexer está generando tokens
  const tokens = lexer.getAllTokens();
  if (tokens.length === 0) {
    console.error("No se generaron tokens. Verifica la entrada y la gramática.");
    return;
  }

  // Mostrar la tabla de tokens y lexemas
  console.log("Tabla de Tokens y Lexemas:");
  for (const token of tokens) {
    const tokenType = dslLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
    const lexema = token.text;
    console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)} |`);
  }

  console.log("----------");

  // Volver a procesar la entrada para que el parser funcione correctamente
  const chars2 = CharStreams.fromString(input);
  const lexer2 = new dslLexer(chars2);
  const tokenStream = new CommonTokenStream(lexer2);
  const parser = new dslParser(tokenStream);
  const tree = parser.regla();

  // Verificar si se produjeron errores sintácticos
  if (parser._syntaxErrors > 0) {
    console.error("¡Se encontraron errores de sintaxis en la entrada!");
  } else {
    console.log("¡Entrada válida!");
    console.log("Árbol de derivación:");
    console.log(tree.toStringTree(parser.ruleNames));

    // Visitor
    const visitor = new CustomDSLVisitor();
    visitor.visit(tree);
  }
}

function leerCadena() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Ingresa una cadena: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Ejecuta la función principal
main();
