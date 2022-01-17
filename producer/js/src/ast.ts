import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
import { ComposeLexer } from "./ts/ComposeLexer";
import { ComposeParser } from "./ts/ComposeParser";

interface EntityFlow {
    Entity: String
    Calls: CodeCall[]
}

interface CodeCall {
    FunctionName: string
    Parameters: ParamType[]
}

interface ParamType {
    TypeName: string
    TypeValue: string
}

function Compile(str:string) {
// Create the lexer and parser
    let inputStream = new ANTLRInputStream(str);
    let lexer = new ComposeLexer(inputStream);
    // @ts-ignore
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ComposeParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
    let tree = parser.compilationUnit();
}
