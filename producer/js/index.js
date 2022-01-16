const antlr4 = require('antlr4');
import ComposeLexer from '../../libs/js/ComposeLexer.js';
import ComposerParser from '../../libs/js/ComposeParser.js';
// import ComposeParserListener from '../../libs/js/ComposeParserListener.js';

const chars = new antlr4.InputStream(input);
const lexer = new ComposeLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ComposerParser(tokens);

parser.buildParseTrees = true;
const tree = parser.compilationUnit();

const input = 'Book.from("basic").to("quake_demo")';
console.log(tree);
